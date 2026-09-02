<template>
  <section id="portfolio" class="py-20 bg-gray-950 text-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      
      <!-- Título da Seção Centralizado -->
    <div class="text-center mb-14">
        <span class="text-blue-400 font-semibold tracking-widest text-xs uppercase">Portfólio</span>
        <h2 class="text-2xl lg:text-3xl font-extrabold mt-1 tracking-tight">SITES DESENVOLVIDOS</h2>
        <div class="w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
        <p class="text-gray-400 text-sm mt-3">Alguns dos projetos do nosso portfólio.</p>
  </div>

      <!-- Carrossel com Auto-Scroll via JavaScript Moderno -->
      <div 
        class="relative w-full overflow-hidden"
        @mouseenter="isPaused = true"
        @mouseleave="isPaused = false"
      >
        <div ref="trackRef" class="flex gap-5 py-2 w-max">
          
          <!-- Conjunto 1 -->
          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative">
              <picture>
                <source srcset="/static/portfolio/thumbnail/webp/fso.webp" type="image/webp" />
                <source srcset="/static/portfolio/thumbnail/png/fso.png" type="image/png" />
                <img width="500" height="100" class="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" src="/static/portfolio/thumbnail/png/fso.png" alt="fso" />
              </picture>
            </div>
            <div class="p-4 flex items-center justify-between">
              <div>
                <h3 class="font-bold text-sm text-white tracking-wide">FSO</h3>
                <p class="text-[11px] text-gray-400">Sistema Web</p>
              </div>
              <span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Web</span>
            </div>
          </div>

          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative">
              <picture>
                <source srcset="/static/portfolio/thumbnail/webp/fenix.webp" type="image/webp" />
                <source srcset="/static/portfolio/thumbnail/png/fenix.png" type="image/png" />
                <img width="500" height="100" class="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" src="/static/portfolio/thumbnail/png/fenix.png" alt="fenix" />
              </picture>
            </div>
            <div class="p-4 flex items-center justify-between">
              <div>
                <h3 class="font-bold text-sm text-white tracking-wide">Fênix</h3>
                <p class="text-[11px] text-gray-400">Portal Corporativo</p>
              </div>
              <span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Corporativo</span>
            </div>
          </div>

          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative">
              <picture>
                <source srcset="/static/portfolio/thumbnail/webp/lsstar.webp" type="image/webp" />
                <source srcset="/static/portfolio/thumbnail/png/lsstar.png" type="image/png" />
                <img width="500" height="100" class="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" src="/static/portfolio/thumbnail/png/lsstar.png" alt="lsstar" />
              </picture>
            </div>
            <div class="p-4 flex items-center justify-between">
              <div>
                <h3 class="font-bold text-sm text-white tracking-wide">LS Star</h3>
                <p class="text-[11px] text-gray-400">Desenvolvimento Web</p>
              </div>
              <span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Web</span>
            </div>
          </div>

          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative">
              <picture>
                <source srcset="/static/portfolio/thumbnail/webp/ajz.webp" type="image/webp" />
                <source srcset="/static/portfolio/thumbnail/png/ajz.png" type="image/png" />
                <img width="500" height="100" class="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" src="/static/portfolio/thumbnail/png/ajz.png" alt="ajz" />
              </picture>
            </div>
            <div class="p-4 flex items-center justify-between">
              <div>
                <h3 class="font-bold text-sm text-white tracking-wide">AJZ</h3>
                <p class="text-[11px] text-gray-400">Solução Tecnológica</p>
              </div>
              <span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Web</span>
            </div>
          </div>

          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative">
              <picture>
                <source srcset="/static/portfolio/thumbnail/webp/bella.webp" type="image/webp" />
                <source srcset="/static/portfolio/thumbnail/png/bella.png" type="image/png" />
                <img width="500" height="100" class="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" src="/static/portfolio/thumbnail/png/bella.png" alt="bella" />
              </picture>
            </div>
            <div class="p-4 flex items-center justify-between">
              <div>
                <h3 class="font-bold text-sm text-white tracking-wide">Bella</h3>
                <p class="text-[11px] text-gray-400">Landing Page</p>
              </div>
              <span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Landing</span>
            </div>
          </div>

          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative">
              <picture>
                <source srcset="/static/portfolio/thumbnail/webp/casadelpueblo.webp" type="image/webp" />
                <source srcset="/static/portfolio/thumbnail/png/casadelpueblo.png" type="image/png" />
                <img width="500" height="100" class="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" src="/static/portfolio/thumbnail/png/casadelpueblo.png" alt="casadelpueblo" />
              </picture>
            </div>
            <div class="p-4 flex items-center justify-between">
              <div>
                <h3 class="font-bold text-sm text-white tracking-wide">Casa del Pueblo</h3>
                <p class="text-[11px] text-gray-400">Portal Cultural</p>
              </div>
              <span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Portal</span>
            </div>
          </div>

          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative">
              <picture>
                <source srcset="/static/portfolio/thumbnail/webp/espacovitoria.webp" type="image/webp" />
                <source srcset="/static/portfolio/thumbnail/png/espacovitoria.png" type="image/png" />
                <img width="500" height="100" class="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" src="/static/portfolio/thumbnail/png/espacovitoria.png" alt="espacovitoria" />
              </picture>
            </div>
            <div class="p-4 flex items-center justify-between">
              <div>
                <h3 class="font-bold text-sm text-white tracking-wide">Espaço Vitória</h3>
                <p class="text-[11px] text-gray-400">Espaço de Eventos</p>
              </div>
              <span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Eventos</span>
            </div>
          </div>

          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative">
              <picture>
                <source srcset="/static/portfolio/thumbnail/webp/fazao.webp" type="image/webp" />
                <source srcset="/static/portfolio/thumbnail/png/fazao.png" type="image/png" />
                <img width="500" height="100" class="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" src="/static/portfolio/thumbnail/png/fazao.png" alt="fazao" />
              </picture>
            </div>
            <div class="p-4 flex items-center justify-between">
              <div>
                <h3 class="font-bold text-sm text-white tracking-wide">Fazão</h3>
                <p class="text-[11px] text-gray-400">Aplicação Web</p>
              </div>
              <span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Web</span>
            </div>
          </div>

          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative">
              <picture>
                <source srcset="/static/portfolio/thumbnail/webp/bressan.webp" type="image/webp" />
                <source srcset="/static/portfolio/thumbnail/png/bressan.png" type="image/png" />
                <img width="500" height="100" class="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" src="/static/portfolio/thumbnail/png/bressan.png" alt="bressan" />
              </picture>
            </div>
            <div class="p-4 flex items-center justify-between">
              <div>
                <h3 class="font-bold text-sm text-white tracking-wide">Bressan</h3>
                <p class="text-[11px] text-gray-400">Plataforma Web</p>
              </div>
              <span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Web</span>
            </div>
          </div>

          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative">
              <picture>
                <source srcset="/static/portfolio/thumbnail/webp/abcp.webp" type="image/webp" />
                <source srcset="/static/portfolio/thumbnail/png/abcp.png" type="image/png" />
                <img width="500" height="100" class="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" src="/static/portfolio/thumbnail/png/abcp.png" alt="abcp" />
              </picture>
            </div>
            <div class="p-4 flex items-center justify-between">
              <div>
                <h3 class="font-bold text-sm text-white tracking-wide">ABCP</h3>
                <p class="text-[11px] text-gray-400">Portal Institucional</p>
              </div>
              <span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Institucional</span>
            </div>
          </div>

          <!-- Conjunto 2 (Duplicado para loop contínuo) -->
          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative"><picture><img class="w-full h-full object-cover object-top" src="/static/portfolio/thumbnail/png/fso.png" alt="fso" /></picture></div>
            <div class="p-4 flex items-center justify-between"><div><h3 class="font-bold text-sm text-white tracking-wide">FSO</h3><p class="text-[11px] text-gray-400">Sistema Web</p></div><span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Web</span></div>
          </div>
          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative"><picture><img class="w-full h-full object-cover object-top" src="/static/portfolio/thumbnail/png/fenix.png" alt="fenix" /></picture></div>
            <div class="p-4 flex items-center justify-between"><div><h3 class="font-bold text-sm text-white tracking-wide">Fênix</h3><p class="text-[11px] text-gray-400">Portal Corporativo</p></div><span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Corporativo</span></div>
          </div>
          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative"><picture><img class="w-full h-full object-cover object-top" src="/static/portfolio/thumbnail/png/lsstar.png" alt="lsstar" /></picture></div>
            <div class="p-4 flex items-center justify-between"><div><h3 class="font-bold text-sm text-white tracking-wide">LS Star</h3><p class="text-[11px] text-gray-400">Desenvolvimento Web</p></div><span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Web</span></div>
          </div>
          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative"><picture><img class="w-full h-full object-cover object-top" src="/static/portfolio/thumbnail/png/ajz.png" alt="ajz" /></picture></div>
            <div class="p-4 flex items-center justify-between"><div><h3 class="font-bold text-sm text-white tracking-wide">AJZ</h3><p class="text-[11px] text-gray-400">Solução Tecnológica</p></div><span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Web</span></div>
          </div>
          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative"><picture><img class="w-full h-full object-cover object-top" src="/static/portfolio/thumbnail/png/bella.png" alt="bella" /></picture></div>
            <div class="p-4 flex items-center justify-between"><div><h3 class="font-bold text-sm text-white tracking-wide">Bella</h3><p class="text-[11px] text-gray-400">Landing Page</p></div><span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Landing</span></div>
          </div>
          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative"><picture><img class="w-full h-full object-cover object-top" src="/static/portfolio/thumbnail/png/casadelpueblo.png" alt="casadelpueblo" /></picture></div>
            <div class="p-4 flex items-center justify-between"><div><h3 class="font-bold text-sm text-white tracking-wide">Casa del Pueblo</h3><p class="text-[11px] text-gray-400">Portal Cultural</p></div><span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Portal</span></div>
          </div>
          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative"><picture><img class="w-full h-full object-cover object-top" src="/static/portfolio/thumbnail/png/espacovitoria.png" alt="espacovitoria" /></picture></div>
            <div class="p-4 flex items-center justify-between"><div><h3 class="font-bold text-sm text-white tracking-wide">Espaço Vitória</h3><p class="text-[11px] text-gray-400">Espaço de Eventos</p></div><span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Eventos</span></div>
          </div>
          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative"><picture><img class="w-full h-full object-cover object-top" src="/static/portfolio/thumbnail/png/fazao.png" alt="fazao" /></picture></div>
            <div class="p-4 flex items-center justify-between"><div><h3 class="font-bold text-sm text-white tracking-wide">Fazão</h3><p class="text-[11px] text-gray-400">Aplicação Web</p></div><span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Web</span></div>
          </div>
          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative"><picture><img class="w-full h-full object-cover object-top" src="/static/portfolio/thumbnail/png/bressan.png" alt="bressan" /></picture></div>
            <div class="p-4 flex items-center justify-between"><div><h3 class="font-bold text-sm text-white tracking-wide">Bressan</h3><p class="text-[11px] text-gray-400">Plataforma Web</p></div><span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Web</span></div>
          </div>
          <div class="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group/card hover:border-blue-500/50 transition-all duration-300">
            <div class="overflow-hidden h-36 bg-gray-950 relative"><picture><img class="w-full h-full object-cover object-top" src="/static/portfolio/thumbnail/png/abcp.png" alt="abcp" /></picture></div>
            <div class="p-4 flex items-center justify-between"><div><h3 class="font-bold text-sm text-white tracking-wide">ABCP</h3><p class="text-[11px] text-gray-400">Portal Institucional</p></div><span class="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md">Institucional</span></div>
          </div>

        </div>
      </div>


    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const trackRef = ref<HTMLElement | null>(null)
const isPaused = ref(false)
const scrollSpeed = 0.8
let scrollPos = 0
let halfWidth = 0
let animationFrameId: number | null = null

onMounted(() => {
  if (trackRef.value) {
    // Lê a largura apenas uma vez na inicialização para evitar reflow contínuo
    halfWidth = trackRef.value.scrollWidth / 2
  }

  const step = () => {
    if (!isPaused.value && trackRef.value) {
      scrollPos += scrollSpeed

      if (scrollPos >= halfWidth) {
        scrollPos = 0
      }

      // Apenas escrita, sem leituras geométricas no loop
      trackRef.value.style.transform = `translateX(-${scrollPos}px)`
    }
    animationFrameId = requestAnimationFrame(step)
  }

  animationFrameId = requestAnimationFrame(step)
})

onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>