package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/SherClockHolmes/webpush-go"
)

var sub webpush.Subscription // Mova a declaração da variável para o escopo global

func main() {
	http.HandleFunc("/vapid-keys", serveVapidKeys)
	http.HandleFunc("/subscribe", addCorsHeaders(subscribeHandler))
	http.HandleFunc("/push", addCorsHeaders(pushHandler))

	fmt.Println("Server listening on :8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

// Função para adicionar cabeçalhos CORS
func addCorsHeaders(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, Authorization")

		// Resolva a solicitação OPTIONS imediatamente se for uma solicitação preflight CORS
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next(w, r)
	}
}

func serveVapidKeys(w http.ResponseWriter, r *http.Request) {
	vapidPublicKey, vapidPrivateKey, err := webpush.GenerateVAPIDKeys()
	if err != nil {
		http.Error(w, fmt.Sprintf("{\"error\": \"%s\"}", err.Error()), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "{\"publicKey\": \"%s\", \"privateKey\": \"%s\"}", vapidPublicKey, vapidPrivateKey)
}

func subscribeHandler(w http.ResponseWriter, r *http.Request) {
	var s webpush.Subscription
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "{\"error\": \"Error reading request body\"}", http.StatusBadRequest)
		fmt.Println("Subscription error:", err)
		return
	}

	err = json.Unmarshal(body, &s)
	if err != nil {
		http.Error(w, "{\"error\": \"Error decoding subscription data\"}", http.StatusBadRequest)
		fmt.Println("Subscription error:", err)
		return
	}

	sub = s // Atribua a variável global para ser usada posteriormente
	fmt.Println("Subscription received:", sub)

	// Responder com sucesso
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "{\"message\": \"Subscription received successfully\"}")
}

func pushHandler(w http.ResponseWriter, r *http.Request) {
	// Crie uma notificação
	payload := []byte("Teste de notificação")

	// Envie a notificação
	resp, err := webpush.SendNotification(payload, &sub, &webpush.Options{
		Subscriber:      "mailto:seu-email@example.com",
		VAPIDPublicKey:  "<YOUR_VAPID_PUBLIC_KEY>",
		VAPIDPrivateKey: "<YOUR_VAPID_PRIVATE_KEY>",
	})
	if err != nil {
		fmt.Println("Erro ao enviar notificação:", err)
		http.Error(w, "Erro ao enviar notificação", http.StatusInternalServerError)
		return
	}

	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Erro ao ler resposta:", err)
	} else {
		fmt.Println("Resposta:", string(body))
	}

	w.WriteHeader(http.StatusOK)
}
