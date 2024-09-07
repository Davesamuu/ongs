let dados = [
    {
        nome: "ABC Aprendiz",
        descricao: "Fundado e administrado pelo Rotary Club de Santo André, atua há mais de 58 anos na capacitação de jovens, suas famílias e comunidades. Seus programas promovem inclusão social e integração ao mercado de trabalho, através de: Formação técnica, cultural e profissional. Desenvolvimento da consciência político-cidadã.",
        link: "https://www.abcaprendiz.org.br",
        tags: "capacitação, inclusão, trabalho",
        imagem: " img.jpeg" // Exemplo de imagem
    },
    {
        nome: "Agência do Bem",
        descricao: "A Agência do Bem é uma organização da sociedade civil de interesse público, sem fins lucrativos e sem finalidade religiosa ou político-partidária. Sua missão é promover o desenvolvimento humano visando à cidadania plena de populações de baixa renda, através da educação, de forma transparente e sustentável.",
        link: "https://www.agenciadobem.org.br",
        tags: "desenvolvimento humano, cidadania, educação",
        imagem: " img2.png" // Exemplo de imagem
    },
    {
        nome: "Aldeias Infantis SOS Brasil",
        descricao: "A Aldeias Infantis SOS atua no Brasil há 55 anos, cuidando de crianças, adolescentes, jovens e famílias que perderam o direito ao cuidado parental ou que estão em risco de perdê-lo. Toda criança tem direito a um cuidado de qualidade.",
        link: "https://www.aldeiasinfantis.org.br",
        tags: "crianças, adolescentes, famílias, cuidado parental",
        imagem: " img3.jpg" // Exemplo de imagem
    },
    {
        nome: "Amare",
        descricao: "AMARE é uma associação beneficente de assistência social que nasceu da iniciativa de jovens locais em 1990. Sua equipe multiprofissional resgata crianças, adolescentes e suas famílias, vítimas de uma sociedade doente, marcadas por depressão, fome, violência, drogas e procura reencantá-las para a vida.",
        link: "https://amarebrasil.org.br",
        tags: "assistência social, crianças, adolescentes, famílias",
        imagem: " img4.png" // Exemplo de imagem
    },
    {
        nome: "Américas Amigas",
        descricao: "A missão da Américas Amigas é promover, em território nacional, atividades pela queda da mortalidade por câncer de mama, beneficiando principalmente a população em situação de vulnerabilidade social, por meio da detecção e diagnóstico precoce da doença.",
        link: "https://www.americasamigas.org.br/o-que-fazemos",
        tags: "câncer de mama, diagnóstico precoce, saúde",
        imagem: " img5.png" // Exemplo de imagem
    },
    {
        nome: "Amigos da Poli",
        descricao: "O Fundo Patrimonial Amigos da Poli é uma associação que capta recursos por doação e os destina para apoiar projetos e iniciativas da Escola Politécnica (Poli) da USP. Seu objetivo é desenvolver o potencial dos alunos da Poli-USP, contribuindo com a excelência de sua formação.",
        link: "https://www.amigosdapoli.com.br",
        tags: "educação, Poli-USP, desenvolvimento acadêmico",
        imagem: " img6.jpg" // Exemplo de imagem
    },
    {
        nome: "Amigos do Bem",
        descricao: "Desde 1993, os Amigos do Bem trabalham para transformar vidas no sertão nordestino, a região mais carente do Brasil. Todos os meses, mais de 150 mil pessoas, que vivem em 300 povoados em situação de extrema pobreza, são atendidas com projetos de educação, trabalho e renda, água, moradia e saúde.",
        link: "https://www.amigosdobem.org",
        tags: "sertão nordestino, educação, trabalho e renda, saúde",
        imagem: " img7.webp" // Exemplo de imagem
    },
    {
        nome: "Associação Aliança Empreendedora",
        descricao: "O trabalho da Aliança Empreendedora consiste em apoiar empresas, organizações sociais e governos a desenvolver modelos de negócios inclusivos e projetos de apoio a microempreendedores de baixa renda, ampliando o acesso a conhecimento, redes, mercados e crédito para que desenvolvam ou iniciem seus empreendimentos.",
        link: "https://aliancaempreendedora.org.br",
        tags: "empreendedorismo, negócios inclusivos, microempreendedores",
        imagem: " img8.jpeg" // Exemplo de imagem
    },
    {
        nome: "Associação Brasileira de Linfoma e Leucemia (ABRALE)",
        descricao: "A Abrale (Associação Brasileira de Linfoma e Leucemia) é uma organização sem fins lucrativos, de abrangência nacional, criada em 2002 por pacientes e familiares com a missão de oferecer ajuda e mobilizar parceiros para que todas as pessoas com câncer e doenças do sangue tenham acesso ao melhor tratamento.",
        link: "https://abrale.org.br",
        tags: "câncer, linfoma, leucemia, doenças do sangue",
        imagem: " img9.png" // Exemplo de imagem
    },
    {
        nome: "Associação Vaga Lume",
        descricao: "A Vaga Lume é uma organização social que implanta bibliotecas em comunidades rurais da Amazônia Legal brasileira e promove o acesso à leitura, direito de toda criança.",
        link: "https://www.vagalume.org.br/quem-somos/",
        tags: "educação, leitura, bibliotecas, Amazônia",
        imagem: " img10.jpg" // Exemplo de imagem
    },
    {
        nome: "Bairro da Juventude",
        descricao: "Os Centros da Juventude são espaços de convivência para atividades de lazer, esportes, cultura e qualificação profissional para adolescentes e jovens. Foram criados para afastar adolescentes e jovens de situações de risco e de vulnerabilidade social, com ações que favoreçam a formação pessoal, profissional e política.",
        link: "https://www.bairrodajuventude.org.br",
        tags: "juventude, esporte, cultura, qualificação profissional",
        imagem: " img11.webp" // Exemplo de imagem
    },
    {
        nome: "Casa do Menino Jesus de Praga",
        descricao: "Objetivo do projeto é promover o acolhimento institucional, a proteção, o bem-estar, a assistência, a habilitação e/ou reabilitação a um maior número de pessoas com lesões neurológicas graves e deficiências motoras permanentes, admitindo-as em qualquer idade, desde que adquiridas as patologias no período de vida de criança e/ou adolescente, em situação de vulnerabilidade social.",
        link: "http://casadomenino.org.br",
        tags: "acolhimento, proteção, bem-estar, deficiências motoras",
        imagem: " img12.jpg" // Exemplo de imagem
    },
    {
        nome: "Casa Ronald McDonald ABC",
        descricao: "O propósito da Casa Ronald McDonald ABC é ser uma “casa longe de casa”, oferecendo apoio integral às crianças e aos adolescentes acometidos pelo câncer e que realizam o tratamento nos hospitais da Grande São Paulo acompanhados de suas famílias.",
        link: "https://casaronaldabc.org.br/quem-somos/",
        tags: "apoio às crianças, câncer, suporte familiar",
        imagem: " img13.png" // Exemplo de imagem
    },
    {
        nome: "Childhood Brasil",
        descricao: "A Childhood Brasil é uma Organização da Sociedade Civil de Interesse Público (OSCIP) que atua na proteção dos direitos humanos de crianças e adolescentes, principalmente na prevenção e enfrentamento ao abuso e à exploração sexual.",
        link: "https://www.childhood.org.br",
        tags: "direitos humanos, proteção infantil, abuso sexual",
        imagem: " img14.jpg" // Exemplo de imagem
    },
    {
        nome: "Cruz Vermelha Brasileira – Estado de São Paulo",
        descricao: "A Cruz Vermelha São Paulo (CVSP) tem iluminado a vida de milhares de pessoas há mais de um século, oferecendo apoio vital a quem mais precisa. Fundada em 1912, a organização tem sido uma força motriz na cena humanitária, com ações que se estendem além das fronteiras e alcançam cidadãos em todo o estado de São Paulo.",
        link: "https://cruzvermelhasaopaulo.org.br",
        tags: "humanitária, apoio, emergência",
        imagem: " img15.png" // Exemplo de imagem
    },
    {
        nome: "Fundação Cristiano Varella",
        descricao: "Com a Missão de “Combater o câncer valorizando a vida”, o Hospital do Câncer de Muriaé deu início às suas atividades, há 13 anos, já credenciado como Centro de Assistência em Alta Complexidade em Oncologia (CACON), pelo Ministério da Saúde.",
        link: "https://fcv.org.br/site/",
        tags: "câncer, oncologia, assistência",
        imagem: " img16.png" // Exemplo de imagem
    },
    {
        nome: "Gastromotiva",
        descricao: "Nossos projetos humanitários, que têm como objetivo levar refeições saudáveis e completas para população em situação de vulnerabilidade social, já impactaram milhões de pessoas em todo o território nacional e no México, onde há também um núcleo Gastromotiva.",
        link: "https://gastromotiva.org",
        tags: "alimentação, vulnerabilidade social, projetos humanitários",
        imagem: " img17.png" // Exemplo de imagem
    },
    {
        nome: "Habitat para a Humanidade Brasil",
        descricao: "Habitat para a Humanidade Brasil é uma organização da sociedade civil que, há 30 anos, atua para combater as desigualdades e garantir que pessoas em condições de pobreza tenham um lugar digno para viver. Presente em mais de 70 países, a organização promove a incidência em políticas públicas pelo direito à cidade e soluções de acesso à moradia, à água e ao saneamento, em articulação com diversos setores e comunidades.",
        link: "https://habitatbrasil.org.br",
        tags: "moradia, pobreza, políticas públicas",
        imagem: " img18.jpg" // Exemplo de imagem
    },
    {
        nome: "Instituto do Câncer Infantil",
        descricao: "Oferece suporte e tratamento para crianças e adolescentes com câncer. Aumentar os índices de cura e melhorar a qualidade de vida dos pacientes e seus familiares. Ser referência em assistência, pesquisa científica e ensino em Oncologia Pediátrica.",
        link: "https://ici.ong",
        tags: "câncer infantil, tratamento, pesquisa científica",
        imagem: " img19.png" // Exemplo de imagem
    },
    {
        nome: "Pequeno Cotolengo Paranaense",
        descricao: "O Complexo de Saúde Pequeno Cotolengo é uma Organização da Sociedade Civil (OSC), localizada na cidade de Curitiba, no Paraná, que atua no acolhimento e atendimento especializado de pessoas com deficiências múltiplas em situação de risco, abandono familiar e também asilados hospitalares.",
        link: "https://www.pequenocotolengo.org.br",
        tags: "acolhimento, deficiências múltiplas, atendimento especializado",
        imagem: " img20.jpeg" // Exemplo de imagem
    }
];


