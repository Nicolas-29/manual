// c:\Users\Pichau\OneDrive\Desktop\Office\manual\assets\js\app.js
function trainingApp() {
    return {
        isSettingsOpen: false,
        copiedCommand: null,
        theme: 'light', // 'light' ou 'dark'
        config: {
            nomeAtendente: 'Consultor(a) de Crédito',
            nomeEmpresa: 'Sua Empresa Aqui',
            valorParcela: 'R$ 159,00',
            valorDisponivel: 'R$ 1.850,00',
            videoExtrato: 'assets/videos/Consultar Extrato.mp4'
        },
        configFields: [
            { key: 'nomeAtendente', label: 'Nome do Atendente', icon: 'user' },
            { key: 'nomeEmpresa', label: 'Nome da Empresa', icon: 'building' },
            { key: 'valorParcela', label: 'Valor da Parcela', icon: 'dollar-sign' },
            { key: 'valorDisponivel', label: 'Valor Disponível', icon: 'wallet' },
            { key: 'videoExtrato', label: 'Vídeo de Extrato', icon: 'video' }
        ],
        phases: [
            { title: "Confiança", desc: "O cliente precisa saber quem você é." },
            { title: "Permissão", desc: "Ele precisa autorizar você a explicar." },
            { title: "Clareza", desc: "Ele precisa entender a proposta." },
            { title: "Decisão Segura", desc: "Ele precisa sentir que não está sendo pressionado." }
        ],
        blockReasons: [
            "Disparo em massa com texto idêntico.",
            "Enviar link na primeira mensagem.",
            "Pedir documento antes de explicar.",
            "Pressionar cliente indeciso.",
            "Falar \"última chance\"."
        ],
        detailedSteps: [
            {
                id: "etapa-1", color: "emerald", title: "Etapa 1 – /apresentacao", command: "/apresentacao",
                context: [{ label: "Onde usar?", text: "Sempre na primeira mensagem." }, { label: "Objetivo:", text: "Criar identificação e pedir permissão." }],
                template: "Oi, tudo bem?\nAqui é {nomeAtendente}, consultor(a) da {nomeEmpresa}.\nEstou retornando uma solicitação vinculada ao seu CPF.\nVocê consegue falar agora?",
                positiveNote: { title: "Por que fazer assim?", items: ["Reduz alerta de golpe.", "Cria contexto.", "Pede permissão (isso diminui resistência)."] },
                negativeNote: { title: "O que NÃO fazer:", items: ["Não falar direto de valor.", "Não enviar link na primeira mensagem.", "Não pedir documentos aqui."] }
            },
            {
                id: "etapa-2", color: "amber", title: "Etapa 2 – /interesse", command: "/interesse",
                context: [{ label: "Quando usar?", text: "Após o cliente responder." }, { label: "Objetivo:", text: "Criar curiosidade controlada." }],
                template: "Verificamos uma possibilidade no seu contrato atual que pode gerar um valor disponível mantendo o mesmo desconto mensal.\nPosso te explicar como funciona?",
                psychology: "O cliente precisa dizer \"sim\" antes de ouvir a proposta. Pequenos \"sins\" geram comprometimento."
            },
            {
                id: "etapa-3", color: "blue", title: "Etapa 3 – /explicacao", command: "/explicacao",
                context: [],
                template: "Funciona como um acréscimo no contrato já existente.\nO valor da parcela permanece {valorParcela}.\nO que pode mudar é apenas o prazo final.\nHoje você possui {valorDisponivel} disponível.",
                positiveNote: { title: "Por que explicar assim?", items: ["Linguagem simples.", "Sem termos técnicos.", "Sem pressão."] }
            },
            {
                id: "etapa-4", color: "purple", title: "Etapa 4 – /golpe", command: "/golpe",
                context: [{ label: "Atenção:", text: "Use apenas se o cliente perguntar." }],
                template: "Entendo totalmente sua preocupação.\nVocê pode confirmar pelos canais oficiais antes de seguir.\nSomos empresa registrada com CNPJ.\nFico à disposição.",
                psychology: "Por que não mandar isso antes? Porque mencionar golpe antes ativa suspeita."
            },
            {
                id: "etapa-5",
                color: "red",
                title: "Etapa 5 – /documentos",
                command: "/documentos",
                context: [
                    { label: "Atenção:", text: "Somente após o cliente dizer que quer seguir." }
                ],
                template: "Para darmos continuidade ao seu atendimento com mais agilidade e segurança, você poderia me enviar, por favor:\n\n✅ O extrato dos últimos 30 dias do Caixa Tem\n✅ A foto do seu RG (frente e verso)\n\nFique tranquila(o), é apenas para conferência e manter tudo certinho para você.\n\nQualquer dúvida, estou aqui para ajudar. 💬✨\n\nSe não souber como, posso te enviar um vídeo com o passo a passo.",
                positiveNote: {
                    title: "Por que essa versão é melhor?",
                    items: [
                        "Mensagem mais humana e natural.",
                        "Explica o motivo da solicitação.",
                        "Reduz resistência do cliente.",
                        "Evita excesso de documentos."
                    ]
                },
                negativeNote: {
                    title: "Erro grave:",
                    items: [
                        "Pedir documento antes do aceite gera denúncia.",
                        "Listar muitos documentos aumenta desconfiança.",
                        "Não explicar o motivo da solicitação."
                    ]
                }
            },
            {
                id: "etapa-6",
                color: "emerald",
                title: "Etapa 6 – /aprovacao",
                command: "/aprovacao",
                context: [
                    { label: "Quando usar?", text: "Após envio e validação dos documentos." }
                ],
                template: "Sua proposta foi analisada e está apta para formalização.\n\nAgora é necessário apenas concluir a etapa final de validação.\nApós essa confirmação, o valor será disponibilizado na conta informada.\n\nEstou acompanhando o processo para você.",
                psychology: "Evita euforia exagerada e transmite controle do processo. O cliente sente segurança, não pressão.",
                positiveNote: {
                    title: "Por que esse formato converte mais?",
                    items: [
                        "Remove emoção excessiva.",
                        "Não promete prazo milagroso.",
                        "Transmite acompanhamento.",
                        "Mantém autoridade."
                    ]
                },
                negativeNote: {
                    title: "O que NÃO fazer:",
                    items: [
                        "Não dizer 'já caiu'.",
                        "Não usar excesso de emojis.",
                        "Não prometer minutos se depender de sistema."
                    ]
                }
            }
        ],
        simulation: [
            { sender: "atendente", text: "Oi, tudo bem?\nAqui é {nomeAtendente}, consultor(a) da {nomeEmpresa}.\nEstou retornando uma solicitação vinculada ao seu CPF.\nVocê consegue falar agora?" },

            { sender: "cliente", text: "Sim." },

            { sender: "atendente", text: "Verificamos uma possibilidade no seu contrato atual que pode gerar um valor disponível mantendo o mesmo desconto mensal.\nPosso te explicar como funciona?" },

            { sender: "cliente", text: "Pode explicar." },

            { sender: "atendente", text: "Funciona como um acréscimo no contrato já existente.\nO valor da parcela permanece {valorParcela}.\nO que pode mudar é apenas o prazo final.\nHoje você possui {valorDisponivel} disponível." },

            { sender: "cliente", text: "Quero seguir." },

            { sender: "atendente", text: "Para darmos continuidade com segurança, você poderia me enviar:\n\n✅ O extrato dos últimos 30 dias do Caixa Tem\n✅ A foto do seu RG (frente e verso)\n\nÉ apenas para conferência.\nSe não souber como tirar o extrato, posso te enviar um vídeo explicando." },

            { sender: "cliente", text: "Enviei." },

            { sender: "atendente", text: "Recebi seus documentos, obrigada.\nEstou encaminhando para validação agora.\nAssim que concluir, te aviso imediatamente." },

            { sender: "atendente", text: "Sua proposta foi analisada e está apta para formalização.\nAgora é necessário apenas concluir a etapa final de validação.\nApós essa confirmação, o valor será disponibilizado na conta informada." },

            { sender: "atendente", text: "Vou te enviar o link oficial para assinatura.\nAssim que finalizar, me avise para que eu acompanhe a liberação." }
        ],

        initApp() {
            // Carrega o tema do localStorage ou prefência do sistema
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                this.theme = savedTheme;
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.theme = 'dark';
            }
            this.updateTheme();

            const savedConfig = localStorage.getItem('trainingConfig');
            if (savedConfig) {
                // Usamos Object.assign para mesclar e garantir que novas chaves no código não quebrem o app
                Object.assign(this.config, JSON.parse(savedConfig));
            }

            // Inicializa os ícones do Lucide
            this.$nextTick(() => {
                lucide.createIcons();
            });

            // Observa mudanças para re-renderizar ícones se necessário (ex: novos itens)
            // Para este caso estático, o nextTick inicial é suficiente, mas se houver updates dinâmicos:
            this.$watch('isSettingsOpen', () => {
                this.$nextTick(() => lucide.createIcons());
            });
        },

        updateTheme() {
            if (this.theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },

        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            this.updateTheme();
            localStorage.setItem('theme', this.theme);
        },

        formatText(text) {
            return text
                .replace(/{nomeAtendente}/g, this.config.nomeAtendente)
                .replace(/{nomeEmpresa}/g, this.config.nomeEmpresa)
                .replace(/{valorParcela}/g, this.config.valorParcela)
                .replace(/{valorDisponivel}/g, this.config.valorDisponivel)
                .replace(/{videoExtrato}/g, this.config.videoExtrato);
        },

        copyToClipboard(text, command) {
            const formatted = this.formatText(text);
            navigator.clipboard.writeText(formatted);
            this.copiedCommand = command;
            setTimeout(() => this.copiedCommand = null, 2000);
            this.$nextTick(() => lucide.createIcons()); // Atualiza ícone de check
        },

        getColor(color) {
            const map = {
                emerald: { bg: "bg-emerald-50 dark:bg-emerald-500/10", text: "text-emerald-700 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-500/20" },
                amber: { bg: "bg-amber-50 dark:bg-amber-500/10", text: "text-amber-700 dark:text-amber-400", border: "border-amber-200 dark:border-amber-500/20" },
                blue: { bg: "bg-blue-50 dark:bg-blue-500/10", text: "text-blue-700 dark:text-blue-400", border: "border-blue-200 dark:border-blue-500/20" },
                purple: { bg: "bg-purple-50 dark:bg-purple-500/10", text: "text-purple-700 dark:text-purple-400", border: "border-purple-200 dark:border-purple-500/20" },
                red: { bg: "bg-red-50 dark:bg-red-500/10", text: "text-red-700 dark:text-red-400", border: "border-red-200 dark:border-red-500/20" },
            };
            return map[color] || map.blue;
        },

        saveConfig() {
            localStorage.setItem('trainingConfig', JSON.stringify(this.config));
        }
    }
}
