// Arquivo gerado pelo Motor de Inteligência Corporativa
const toolsData = [
    {
        "id": "plataforma-0",
        "name": "Blubash",
        "brandClass": "brand-blubash",
        "icon": "fa-rocket",
        "rating": 4.9,
        "reviews": "Sistema Real",
        "desc": "Uma das plataformas mais completas 'Tudo em Um'. Oferece atendimento Omnichannel, Chatbot avançado, CRM nativo e campanhas para WhatsApp, Email e Instagram num ecossistema único sem gambiarras. 💰 Preços: A partir de R$ 149/mês (Atendentes base) a R$ 499 (Tudo Liberado).",
        "tags": [
            "Tudo em Um",
            "WhatsApp",
            "Chatbot",
            "Omnichannel",
            "CRM",
            "E-mail"
        ],
        "price": "Completo",
        "link": "https://blubash.com.br",
        "contra": "Menor visibilidade global de marca comparada com HubSpot e RD Station.",
        "categories": [
            "allinone",
            "whatsapp",
            "chatbot",
            "crm",
            "email"
        ]
    },
    {
        "id": "plataforma-1",
        "name": "RD Station + Conversas",
        "brandClass": "brand-rdstation",
        "icon": "fa-chart-line",
        "rating": 4.6,
        "reviews": "Sistema Real",
        "desc": "Líder no Brasil para Marketing Corporativo. Essencialmente CRM e E-mail, mas conta com o módulo Tallos para automação de WhatsApp e bots de triagem. 💰 Preços: Marketing a partir de R$ 68,90 (Light), Módulo de WhatsApp (Conversas) a partir de R$ 349/mês.",
        "tags": [
            "CRM",
            "E-mail",
            "Automação",
            "WhatsApp (módulo)"
        ],
        "price": "Modular",
        "link": "https://www.rdstation.com",
        "contra": "O módulo de WhatsApp ('Conversas' da antiga Tallos) engessa um pouco fluxos omnichannel completos, limitando o CRM ao MKT.",
        "categories": [
            "email",
            "crm",
            "whatsapp"
        ]
    },
    {
        "id": "plataforma-2",
        "name": "Kommo (amoCRM)",
        "brandClass": "brand-hubspot",
        "icon": "fa-message",
        "rating": 4.7,
        "reviews": "Sistema Real",
        "desc": "CRM focado puramente em Vendas via Mensageiros. Destaca-se por rodar muito bem o funil de negócios direto do WhatsApp, Facebook e Instagram com chatbots simples. 💰 Preços: Planos a partir de U$ 15/usuário/mês até U$ 45 (Enterprise).",
        "tags": [
            "CRM",
            "WhatsApp",
            "Chatbot",
            "Vendas"
        ],
        "price": "Acessível",
        "link": "https://kommo.com/pt/",
        "contra": "Fraco para disparos massivos de marketing ou construção de de chatbots muito robustos de auto-atendimento.",
        "categories": [
            "crm",
            "whatsapp",
            "chatbot"
        ]
    },
    {
        "id": "plataforma-3",
        "name": "ActiveCampaign",
        "brandClass": "brand-activecampaign",
        "icon": "fa-envelope-open-text",
        "rating": 4.8,
        "reviews": "Sistema Real",
        "desc": "Plataforma premium para jornada de E-mail Marketing e CRM de relacionamento. Possui integrações via parceiros para WhatsApp, sendo a fundação para campanhas de e-mail agressivas. 💰 Preços: A partir de U$ 15/mês (Lite) a U$ 149/mês (Pro) dependendo da base de contatos.",
        "tags": [
            "E-mail",
            "CRM",
            "Automação"
        ],
        "price": "Avançado",
        "link": "https://www.activecampaign.com/br",
        "contra": "Não tem WPP WhatsApp/Chatbot nativo para conversas 1:1, exige pagar para integrações de terceiros como o Zenvia/Twilio encarecendo e dobrando os hubs.",
        "categories": [
            "email",
            "crm"
        ]
    },
    {
        "id": "plataforma-4",
        "name": "Zenvia Customer Cloud",
        "brandClass": "brand-zenvia",
        "icon": "fa-comments",
        "rating": 4.5,
        "reviews": "Sistema Real",
        "desc": "Foco pesado em infraestrutura corporativa de disparo em massa e chatbots multicanal (WhatsApp/SMS). Requer configurações avançadas para operar como CRM visual completo. 💰 Preços: Maioria sob consulta (Enterprise), mas planos base em torno de R$ 999/mês + consumo de msg.",
        "tags": [
            "WhatsApp API",
            "Chatbot",
            "Disparo em Massa",
            "Omnichannel"
        ],
        "price": "Corporativo",
        "link": "https://zenvia.com",
        "contra": "Falta um CRM Pipeline nativo no-code, seu forte é de infra de disparo (exige desenvolvedores para a implementação do núcleo via API).",
        "categories": [
            "whatsapp",
            "chatbot",
            "allinone"
        ]
    },
    {
        "id": "plataforma-5",
        "name": "Meets CRM",
        "brandClass": "brand-activecampaign",
        "icon": "fa-users",
        "rating": 4.6,
        "reviews": "Sistema Real",
        "desc": "Plataforma 100% brasileira. Une o controle do funil comercial ao atendimento multicanal com chatbot, integra WhatsApp, Instagram e gerencia equipes mistas. 💰 Preços: A partir de R$ 99/mês (Inicial) até R$ 299/mês (Completo).",
        "tags": [
            "CRM",
            "Omnichannel",
            "Chatbot",
            "WhatsApp"
        ],
        "price": "Custo-Benefício",
        "link": "https://meets.com.br",
        "contra": "Automação de Marketing (email) modesta ou praticamente ausente comparado a grandes bigtechs e interface ligeiramente arcaica.",
        "categories": [
            "crm",
            "whatsapp",
            "chatbot",
            "allinone"
        ]
    },
    {
        "id": "plataforma-6",
        "name": "Take Blip",
        "brandClass": "brand-blubash",
        "icon": "fa-robot",
        "rating": 4.7,
        "reviews": "Sistema Real",
        "desc": "Empresa gigante focada na construção de 'Contatos Inteligentes'. Chatbots complexos (IA) para múltiplos canais, mas o módulo de CRM de pipeline de vendas é menos focado. 💰 Preços: Planos iniciais começam em aprox. R$ 1.000/mês + setup corporativo.",
        "tags": [
            "Chatbot Avançado",
            "IA",
            "WhatsApp Enterprise",
            "Omnichannel"
        ],
        "price": "Enterprise",
        "link": "https://www.blip.ai",
        "contra": "Alta curva de aprendizado, foca mais nos Contatos/Bots que no Pipeline de Vendas em si. Altíssimo custo de implantação/setup consultivo.",
        "categories": [
            "chatbot",
            "whatsapp",
            "allinone"
        ]
    },
    {
        "id": "plataforma-7",
        "name": "SleekFlow",
        "brandClass": "brand-hubspot",
        "icon": "fa-bolt",
        "rating": 4.5,
        "reviews": "Sistema Real",
        "desc": "Plataforma de comércio e atendimento omnichannel. Focada em criar jornadas de chat e disparo de mensagens no WhatsApp atreladas a pagamento e campanhas. 💰 Preços: Conta free com limites, planos pagos de U$ 79/mês (Pro) a U$ 299/mês (Premium).",
        "tags": [
            "WhatsApp",
            "Omnichannel",
            "Vendas",
            "Chatbot"
        ],
        "price": "Intermediário",
        "link": "https://sleekflow.io/pt-br",
        "contra": "Foca no fluxo de compra Social-Commerce e Social-Selling, menos maduro em gestão de contas longas que emitem invoices complexos (CRM B2B Real).",
        "categories": [
            "whatsapp",
            "chatbot"
        ]
    },
    {
        "id": "plataforma-8",
        "name": "HubSpot",
        "brandClass": "brand-hubspot",
        "icon": "fa-hubspot",
        "rating": 4.9,
        "reviews": "Sistema Real",
        "desc": "O CRM mais robusto do mundo. Ferramenta de marketing, vendas e atendimento. Recentemente incluiu integração oficial de WhatsApp Inbox, tornando-se mais atrativa ao mercado BR. 💰 Preços: CRM base grátis, suítes completas de U$ 800/mês a U$ 3.600/mês (Enterprise).",
        "tags": [
            "CRM Global",
            "Inbound Marketing",
            "E-mail",
            "WhatsApp"
        ],
        "price": "Alto Custo",
        "link": "https://br.hubspot.com",
        "contra": "Custo-Brasil inviável para algumas operações (dólar pesadíssimo), as funções de multicanais e WPP Inbox atreladas costumam engordar demais o plano.",
        "categories": [
            "crm",
            "email",
            "allinone"
        ]
    },
    {
        "id": "plataforma-9",
        "name": "Poli Digital",
        "brandClass": "brand-zenvia",
        "icon": "fa-comment-dots",
        "rating": 4.4,
        "reviews": "Sistema Real",
        "desc": "Ferramenta nacional voltada para a caixa de entrada Omnichannel com robôs de automação 24/7 e disparo de WhatsApp para pequenas/médias empresas. 💰 Preços: A partir de R$ 197/mês, subindo conforme número de atendentes e números de WPP.",
        "tags": [
            "WhatsApp",
            "Omnichannel",
            "Atendimento"
        ],
        "price": "Acessível",
        "link": "https://poli.digital",
        "contra": "É um hub forte de caixas de entrada de WhatsApp e tickets, mas falta o DNA e profundidade de um CRM de ciclo de venda (Avanços de Pipeline).",
        "categories": [
            "whatsapp",
            "chatbot"
        ]
    },
    {
        "id": "plataforma-10",
        "name": "WAVY / Sinch",
        "brandClass": "brand-activecampaign",
        "icon": "fa-server",
        "rating": 4.4,
        "reviews": "Sistema Real",
        "desc": "Provedor oficial do WhatsApp. Foco em APIs para desenvolvedores montarem seus próprios CRMs e gateways de disparo, além de e-mail transacional. 💰 Preços: Cobrado primordialmente por volume de mensagens/disparos API em Dólar/Euros.",
        "tags": [
            "API do WhatsApp",
            "Disparo SMS",
            "E-mail Corporativo"
        ],
        "price": "Por volume",
        "link": "https://www.sinch.com/pt-br/",
        "contra": "100% voltado aos desenvolvedores, é uma API e não uma plataforma web bonita onde um diretor vai plugar um número em 10 minutos (Exige codificar).",
        "categories": [
            "whatsapp",
            "email"
        ]
    }
];