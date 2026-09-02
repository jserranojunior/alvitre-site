<script setup lang="ts">
import Portfolio from './Portfolio.vue';
</script>
<template>
<section class="relative w-full h-[30vh] min-h-[200px] overflow-hidden bg-black flex items-center justify-center">
    <div class="absolute inset-0 w-full h-full overflow-hidden">
     <img 
          src="/static/wallpapers/webp/welcome.webp"  
          alt="Bem-vindo ao Alvitre"
          fetchpriority="high"
          style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center;"
        />
    </div>
      
    <div class="absolute inset-0 bg-black/60"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <div class="inline-block overflow-hidden rounded-xl shadow-lg border border-white/10 bg-black/40 backdrop-blur-md px-8 py-6">
        <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-white mb-1">
          ALVITRE
        </h1>
        <p class="text-sm md:text-base text-gray-300">
          Transformando sua ideia em realidade
        </p>
      </div>
    </div>
  </section>

 

<section id="servicos" class="py-24  from-blue-900 via-indigo-950 to-purple-950 text-white">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    
    <!-- Título da Seção -->
    <div class="text-center mb-16">
      <span class="text-blue-400 font-semibold tracking-widest text-sm uppercase">O que fazemos</span>
      <h2 class="text-3xl lg:text-4xl font-extrabold mt-2 tracking-tight">NOSSOS SERVIÇOS & SOLUÇÕES</h2>
      <div class="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
    </div>

    <!-- Grid de 6 Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <!-- 1. Sistemas Web -->
      <div class="bg-black backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="font-bold text-xl mb-3 text-white">Desenvolvimento de Sistemas Web</h3>
          <ul class="text-gray-300 space-y-2 text-sm">
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></span> Plataformas web robustas e ERPs</li>
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></span> Painéis administrativos (dashboards)</li>
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></span> Substituição de planilhas por software</li>
          </ul>
        </div>
      </div>

      <!-- 2. Sites Institucionais -->
      <div class="bg-black backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 class="font-bold text-xl mb-3 text-white">Sites Institucionais</h3>
          <ul class="text-gray-300 space-y-2 text-sm">
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 shrink-0"></span> Websites modernos e 100% responsivos</li>
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 shrink-0"></span> Otimização avançada para o Google (SEO)</li>
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 shrink-0"></span> Foco em conversão e performance</li>
          </ul>
        </div>
      </div>

      <!-- 3. Agentes de IA -->
      <div class="bg-black backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="font-bold text-xl mb-3 text-white">Criação de Agentes de IA</h3>
          <ul class="text-gray-300 space-y-2 text-sm">
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 shrink-0"></span> Desenvolvimento de agentes autônomos</li>
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 shrink-0"></span> Integração com LLMs e APIs inteligentes</li>
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 shrink-0"></span> Automação de fluxos e atendimento</li>
          </ul>
        </div>
      </div>

      <!-- 4. Pentest de Segurança -->
      <div class="bg-black backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="font-bold text-xl mb-3 text-white">Pentest de Segurança</h3>
          <ul class="text-gray-300 space-y-2 text-sm">
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></span> Testes de intrusão em aplicações web</li>
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></span> Auditoria de código e vulnerabilidades</li>
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></span> Hardening e proteção de APIs</li>
          </ul>
        </div>
      </div>

      <!-- 5. APIs e Integrações -->
      <div class="bg-black backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="font-bold text-xl mb-3 text-white">APIs & Integrações</h3>
          <ul class="text-gray-300 space-y-2 text-sm">
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0"></span> Desenvolvimento de APIs REST robustas</li>
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0"></span> Integração com gateways e sistemas externos</li>
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0"></span> Arquitetura de microsserviços</li>
          </ul>
        </div>
      </div>

      <!-- 6. Aulas & Mentorias (Substituiu a consultoria genérica) -->
      <div class="bg-black backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="font-bold text-xl mb-3 text-white">Aulas & Mentorias Técnicas</h3>
          <ul class="text-gray-300 space-y-2 text-sm">
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></span> Aulas práticas de programação</li>
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></span> Mentorias individuais e para equipes</li>
            <li class="flex items-start gap-2"><span class="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></span> Conteúdos em vídeo e palestras focadas</li>
          </ul>
        </div>
      </div>

    </div>

    <!-- Botão de Ação Centralizado -->
    <div class="mt-14 text-center">
      <a
        href="https://web.whatsapp.com/send?phone=5511946439695"
        target="_blank"
        class="inline-flex items-center gap-3 btn-outline border text-white font-bold py-4 px-8 rounded-full "
      >
        <span>Solicitar Orçamento ou Mentoria</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>

  </div>
</section>

<section id="videos" class="py-24 bg-gray-950 text-white">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    
    <!-- Título da Seção -->
    <div class="text-center mb-16">
      <span class="text-blue-400 font-semibold tracking-widest text-sm uppercase">Conteúdos & Aulas</span>
      <h2 class="text-3xl lg:text-4xl font-extrabold mt-2 tracking-tight">VÍDEOS EM DESTAQUE</h2>
      <div class="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
    </div>

    <!-- Grid de 3 Vídeos (Todos com o mesmo padrão azul escuro) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <!-- Vídeo 1: Node para Iniciantes -->
      <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <a
            href="https://www.youtube.com/watch?v=Cm4GGMZvyOw"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative block overflow-hidden rounded-xl shadow-md bg-gray-900 aspect-video flex items-center justify-center border border-gray-800"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-gray-900 to-gray-950 flex flex-col items-center justify-center p-4 text-center">
              <span class="text-blue-400 font-mono text-xs uppercase tracking-widest mb-1">Node.js</span>
              <span class="font-bold text-base text-white">Primeiros Passos com Node.js</span>
            </div>
            <!-- Ícone de Play Flutuante no Hover -->
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </a>
          <h3 class="font-bold text-lg mt-5 mb-2 text-white">Primeiros Passos com Node.js & NPM</h3>
          <p class="text-gray-400 text-sm">Aprenda a iniciar no ecossistema Node de forma prática e direta ao ponto.</p>
        </div>
      </div>

      <!-- Vídeo 2: Git e GitHub para Iniciantes -->
      <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <a
            href="https://www.youtube.com/watch?v=IBogCKMwOLg"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative block overflow-hidden rounded-xl shadow-md bg-gray-900 aspect-video flex items-center justify-center border border-gray-800"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-gray-900 to-gray-950 flex flex-col items-center justify-center p-4 text-center">
              <span class="text-blue-400 font-mono text-xs uppercase tracking-widest mb-1">Git & GitHub</span>
              <span class="font-bold text-base text-white">Git com 4 Comandos</span>
            </div>
            <!-- Ícone de Play Flutuante no Hover -->
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </a>
          <h3 class="font-bold text-lg mt-5 mb-2 text-white">Git & GitHub com Apenas 4 Comandos</h3>
          <p class="text-gray-400 text-sm">Domine o controle de versão essencial para qualquer desenvolvedor.</p>
        </div>
      </div>

      <!-- Vídeo 3: Começando com Rust -->
      <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <a
            href="https://www.youtube.com/watch?v=x5OHtLe87J8"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative block overflow-hidden rounded-xl shadow-md bg-gray-900 aspect-video flex items-center justify-center border border-gray-800"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-gray-900 to-gray-950 flex flex-col items-center justify-center p-4 text-center">
              <span class="text-blue-400 font-mono text-xs uppercase tracking-widest mb-1">Rust</span>
              <span class="font-bold text-base text-white">Começando com Rust</span>
            </div>
            <!-- Ícone de Play Flutuante no Hover -->
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </a>
          <h3 class="font-bold text-lg mt-5 mb-2 text-white">Começando com Rust: Escreva Seu Primeiro Código</h3>
          <p class="text-gray-400 text-sm">Escreva seus primeiros comandos e entenda a estrutura básica do Rust.</p>
        </div>
      </div>

    </div>

  </div>
</section>

<!-- Seção Sobre e Tecnologias com Parallax -->
<div class="flex flex-wrap bg-cover bg-center bg-fixed bg-gray-950/90 bg-blend-darken py-24 dev">
  
  <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Coluna Esquerda: Sobre a Alvitre -->
      <div class="lg:col-span-5 bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-3xl p-8 shadow-2xl">
        <span class="text-blue-400 font-semibold tracking-widest text-xs uppercase">Sobre</span>
        <h2 class="text-2xl lg:text-3xl font-extrabold text-white mt-1 mb-4 tracking-tight">ALVITRE</h2>
        
        <p class="text-gray-300 text-sm leading-relaxed mb-4">
          Com mais de 10 anos de história no mercado tecnológico, a <span class="text-blue-400 font-semibold">Alvitre</span> foi fundada em 2015 em São Paulo por Jorge Junior. A empresa consolidou sua trajetória na criação de sistemas de alta performance, desenvolvimento de soluções sob medida e serviços de consultoria especializada, entregando arquiteturas robustas, seguras e escaláveis para impulsionar negócios.
        </p>

        <div class="border-t border-gray-800 pt-6">
          <h3 class="font-bold text-white text-base">Jorge Junior</h3>
          <p class="text-gray-400 text-xs mt-0.5">Fundador & Desenvolvedor</p>
          <p class="text-gray-500 text-xs mt-2">São Paulo - Brasil</p>
        </div>

        <!-- Botões Sociais -->
        <div class="flex items-center gap-3 mt-6">
          <a href="https://github.com/jserranojunior" target="_blank" rel="noopener noreferrer" class="bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded-xl border border-gray-700 transition-all flex items-center gap-2">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jorgeserranojunior/" target="_blank" rel="noopener noreferrer" class="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all flex items-center gap-2">
            LinkedIn
          </a>
        </div>
      </div>

      <!-- Coluna Direita: Tecnologias Padronizadas com Logos -->
      <div class="lg:col-span-7">
        <div class="mb-8 text-center lg:text-left">
          <span class="text-blue-400 font-semibold tracking-widest text-xs uppercase">Stack</span>
          <h2 class="text-2xl lg:text-3xl font-extrabold text-white mt-1 tracking-tight">TECNOLOGIAS UTILIZADAS</h2>
          <div class="w-12 h-1 bg-blue-500 mt-3 mx-auto lg:mx-0 rounded-full"></div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          
          <!-- HTML/CSS -->
          <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500/40 transition-all">
            <iconify-icon width="28" icon="vscode-icons:file-type-html"></iconify-icon>
            <span class="text-xs font-bold text-gray-200">HTML/CSS</span>
          </div>

          <!-- TypeScript -->
          <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500/40 transition-all">
            <iconify-icon width="28" icon="vscode-icons:file-type-typescript-official"></iconify-icon>
            <span class="text-xs font-bold text-gray-200">TypeScript</span>
          </div>

          <!-- Golang -->
          <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500/40 transition-all">
            <iconify-icon width="28" icon="vscode-icons:file-type-go-gopher"></iconify-icon>
            <span class="text-xs font-bold text-gray-200">Golang</span>
          </div>

          <!-- Node.js -->
          <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500/40 transition-all">
            <iconify-icon width="28" icon="vscode-icons:file-type-node"></iconify-icon>
            <span class="text-xs font-bold text-gray-200">Node.js</span>
          </div>

          <!-- Vite -->
          <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500/40 transition-all">
            <iconify-icon width="28" icon="logos:vitejs"></iconify-icon>
            <span class="text-xs font-bold text-gray-200">Vite</span>
          </div>

          <!-- Rust -->
          <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500/40 transition-all">
            <iconify-icon width="28" icon="logos:rust"></iconify-icon>
            <span class="text-xs font-bold text-gray-200">Rust</span>
          </div>

          <!-- JavaScript -->
          <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500/40 transition-all">
            <iconify-icon width="28" icon="logos:javascript"></iconify-icon>
            <span class="text-xs font-bold text-gray-200">JavaScript</span>
          </div>

          <!-- MySQL -->
          <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500/40 transition-all">
            <iconify-icon width="28" icon="logos:mysql"></iconify-icon>
            <span class="text-xs font-bold text-gray-200">MySQL</span>
          </div>

          <!-- Docker -->
          <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500/40 transition-all">
            <iconify-icon width="28" icon="vscode-icons:file-type-docker2"></iconify-icon>
            <span class="text-xs font-bold text-gray-200">Docker</span>
          </div>

          <!-- Vitest -->
          <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500/40 transition-all">
            <iconify-icon width="28" icon="vscode-icons:file-type-vitest"></iconify-icon>
            <span class="text-xs font-bold text-gray-200">Vitest</span>
          </div>

          <!-- Tailwind -->
          <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500/40 transition-all">
            <iconify-icon width="28" icon="vscode-icons:file-type-tailwind"></iconify-icon>
            <span class="text-xs font-bold text-gray-200">Tailwind</span>
          </div>

          <!-- Linux -->
          <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500/40 transition-all">
            <iconify-icon width="28" icon="logos:linux-tux"></iconify-icon>
            <span class="text-xs font-bold text-gray-200">Linux</span>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>

<section id="sistemas" class="py-24  text-white">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    
    <!-- Título da Seção -->
    <div class="text-center mb-16">
      <span class="text-blue-400 font-semibold tracking-widest text-sm uppercase">Portfólio</span>
      <h2 class="text-3xl lg:text-4xl font-extrabold mt-2 tracking-tight">SISTEMAS DESENVOLVIDOS</h2>
      <div class="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
    </div>

    <!-- Grid de Sistemas (Sem Imagens, Foco em Texto e Arquitetura) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <!-- Sistema 1: Intellect -->
      <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-bold text-xl text-white uppercase tracking-wide mb-2">Intellect</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">Sistema Financeiro da Alvitre focado em controle de fluxo, relatórios gerenciais e alta performance.</p>
        </div>
        <div class="flex items-center gap-2 pt-4 border-t border-gray-800/80">
          <span class="text-[10px] font-mono uppercase bg-gray-800 text-blue-400 px-2.5 py-1 rounded-md">Financeiro</span>
          <span class="text-[10px] font-mono uppercase bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md">Gestão</span>
        </div>
      </div>

      <!-- Sistema 2: LS STAR -->
      <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="font-bold text-xl text-white uppercase tracking-wide mb-2">LS STAR</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">Plataforma completa de gestão empresarial personalizada para as operações da LS Star.</p>
        </div>
        <div class="flex items-center gap-2 pt-4 border-t border-gray-800/80">
          <span class="text-[10px] font-mono uppercase bg-gray-800 text-blue-400 px-2.5 py-1 rounded-md">ERP</span>
          <span class="text-[10px] font-mono uppercase bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md">Corporativo</span>
        </div>
      </div>

      <!-- Sistema 3: Conta Smart -->
      <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h3 class="font-bold text-xl text-white uppercase tracking-wide mb-2">Conta Smart</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">Arquitetura de conta digital fintech voltada para transações ágeis, segurança e usabilidade.</p>
        </div>
        <div class="flex items-center gap-2 pt-4 border-t border-gray-800/80">
          <span class="text-[10px] font-mono uppercase bg-gray-800 text-blue-400 px-2.5 py-1 rounded-md">Fintech</span>
          <span class="text-[10px] font-mono uppercase bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md">Digital</span>
        </div>
      </div>

      <!-- Sistema 4: Acolher -->
      <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="font-bold text-xl text-white uppercase tracking-wide mb-2">Acolher</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">Sistema estruturado para otimização de fluxos de trabalho e gerenciamento de processos institucionais.</p>
        </div>
        <div class="flex items-center gap-2 pt-4 border-t border-gray-800/80">
          <span class="text-[10px] font-mono uppercase bg-gray-800 text-blue-400 px-2.5 py-1 rounded-md">Fluxos</span>
          <span class="text-[10px] font-mono uppercase bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md">Gestão</span>
        </div>
      </div>

      <!-- Sistema 5: Megamed -->
      <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h3 class="font-bold text-xl text-white uppercase tracking-wide mb-2">Megamed</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">Sistema especializado em controle rigoroso de estoque e rastreabilidade para o setor da Megamed.</p>
        </div>
        <div class="flex items-center gap-2 pt-4 border-t border-gray-800/80">
          <span class="text-[10px] font-mono uppercase bg-gray-800 text-blue-400 px-2.5 py-1 rounded-md">Estoque</span>
          <span class="text-[10px] font-mono uppercase bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md">Logística</span>
        </div>
      </div>

      <!-- Sistema 6: Vd Lap -->
      <div class="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="font-bold text-xl text-white uppercase tracking-wide mb-2">Vd Lap</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">Solução voltada para a gestão interna, acompanhamento de demandas e controle administrativo da Vdlap.</p>
        </div>
        <div class="flex items-center gap-2 pt-4 border-t border-gray-800/80">
          <span class="text-[10px] font-mono uppercase bg-gray-800 text-blue-400 px-2.5 py-1 rounded-md">Gestão</span>
          <span class="text-[10px] font-mono uppercase bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md">Interno</span>
        </div>
      </div>

    </div>
  </div>
</section>


<Portfolio></Portfolio>

<footer class=" border-t border-gray-900 text-gray-400 py-12 relative">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      
      <!-- Conteúdo do Rodapé -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <!-- Bloco sobre o significado de Alvitre -->
        <div class="max-w-xl">
          <h2 class="text-white font-bold text-base mb-2 tracking-wide">O que é Alvitre?</h2>
          <p class="text-sm text-gray-400 leading-relaxed">
            "Alvitre" é um termo que pode ser usado para se referir a uma ideia, sugestão ou conselho, com o objetivo de orientar ou direcionar uma decisão. Trata-se de uma proposta apresentada para fornecer perspectivas e ajudar na tomada de decisões ou na resolução de problemas.
          </p>
        </div>

        <!-- Copyright ou Links rápidos opcionais -->
        <div class="text-xs text-gray-500 md:text-right">
          <p>© 2026 Alvitre. Todos os direitos reservados.</p>
        </div>
      </div>

    </div>

    <!-- Botão Voltar ao Topo -->
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      aria-label="To Top"
      class="inline-block p-3 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5 fixed z-50"
      id="btn-back-to-top"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        class="w-4 h-4"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        >
        </path>
      </svg>
    </button>
  </footer>
</template>
