const data = [
    {
        title: "Presidência",
        director: "Gustavo Henrique",
        text:
            `
            O/a Presidente do Grêmio é responsável por representar a organização dentro e fora do Instituto Federal, 
            incluindo judicialmente, assegurando a defesa dos interesses dos estudantes. Além disso, representa o 
            Grêmio em conselhos, contribuindo para melhorias nas condições de ensino. É encarregado/a de fazer cumprir 
            as normas do estatuto, convocar e presidir reuniões da Diretoria Executiva, assinar documentos relacionados 
            ao patrimônio e movimento financeiro junto ao/a Secretário/a de Patrimônio e Finanças, além de assinar 
            correspondências oficiais. O/a Presidente tem o poder de afastar membros em caso de irregularidades, 
            solicitar atos necessários em situações urgentes e desempenhar outras funções essenciais para o pleno 
            funcionamento do Grêmio e a realização dos objetivos estabelecidos.
        `,
        img: "#ADACB5",
    },
    {
        title: "Vice-Presidência",
        director: "Marina de Moura",
        text:
            `
            Ao/a Vice-Presidente/a compete auxiliar o/a Presidente/a em todas as suas funções, atuando como substituto/a 
            em casos de ausência eventual, impedimento temporário ou vacância do cargo. Colabora com as atividades de 
            representação e organização do Grêmio, contribuindo para o seu bom funcionamento. Apoia o/a Presidente/a na 
            tomada de decisões e na execução de projetos e ações do Grêmio. Além disso, desempenha outras atribuições 
            que lhe forem delegadas pelo/a Presidente/a.
        `,
        img: "#D8D5DB",
    },
    {
        title: "Secretaria-Geral",
        director: "Diego Melo e Fábio Lima",
        text:
            `
            O Secretário-Geral do Grêmio desempenha papel crucial na gestão ao publicar comunicados, lavrar atas, 
            gerenciar documentação e redigir correspondências. Além disso, mantém a organização da sede, assegurando 
            recursos necessários para as atividades. O Primeiro-Secretário auxilia nas responsabilidades e assume o 
            cargo em caso de vacância. Essas funções essenciais garantem a eficácia e transparência nas ações do Grêmio.
        `,
        img: "#F2F5DE",
    },
    {
        title: "Secretaria de Patrimônio e Finanças",
        director: "Eduarda Lima",
        text:
            `
            O Secretário de Patrimônio e Finanças do Grêmio tem a responsabilidade de cuidar de todos os bens, tanto 
            materiais quanto imateriais, garantindo sua preservação e uso adequado. Além disso, mantém o registro 
            preciso de todas as transações financeiras e patrimoniais, assinando documentos junto ao Presidente para 
            assegurar a transparência das operações. Apresenta, em conjunto com o Presidente, a prestação de contas ao 
            Conselho de Representantes de Turma, fornecendo informações claras sobre a situação financeira do Grêmio. 
            A divulgação adequada dos relatórios financeiros e patrimoniais também faz parte de suas atribuições, 
            promovendo a transparência na gestão. O parágrafo único destaca a preservação dos registros e do sistema de 
            controle das gestões anteriores, exigindo autorização do Conselho Fiscal Estudantil para eventuais 
            alterações.
        `,
        img: "#4F5D75",
    },
    {
        title: "Diretoria de Arte e Cultura",
        director: "Maria Luiza",
        text:
            `
            A Diretoria de Arte e Cultura tem como responsabilidades promover atividades culturais, como conferências, 
            exposições, concursos e festivais de música, proporcionando aos estudantes do IFAL a expressão e 
            compartilhamento de seus talentos artísticos. Além disso, busca estabelecer parcerias com entidades 
            culturais locais, regionais e nacionais, promovendo intercâmbios e enriquecendo as experiências culturais 
            dos estudantes. A diretoria também organiza e apoia grupos culturais estudantis, facilitando o acesso a 
            espaços e recursos necessários. Adicionalmente, é encarregada de desenvolver campanhas para aumentar e 
            preservar o acervo bibliográfico do Instituto, reconhecendo a importância da leitura e pesquisa no 
            desenvolvimento educacional e cultural dos estudantes.
        `,
        img: "#FFC482",
    },
    {
        title: "Diretoria de Assistência Estudantil",
        director: "Pedro Danilo",
        text:
            `
            A Diretoria de Assistência Estudantil é encarregada de monitorar os pagamentos referentes à assistência 
            estudantil, mantendo os alunos informados sobre eventuais atrasos e suas justificativas. Além disso, 
            representa as dúvidas e necessidades dos alunos em relação à assistência estudantil, buscando soluções 
            para atender às demandas. A diretoria se empenha na melhoria da administração de recursos destinados à 
            assistência estudantil, visando assegurar uma utilização eficiente desses recursos em benefício dos 
            estudantes. A seleção de colaboradores para compor a equipe da Diretoria de Assistência Estudantil é 
            realizada com o objetivo de encontrar pessoas comprometidas e capacitadas para auxiliar nas atividades 
            e projetos da área.
        `,
        img: "#DB5375",
    },
    {
        title: "Diretoria de Assuntos Educacionais",
        director: "Geovana",
        text:
            `
            A Diretoria de Assuntos Educacionais desempenha diversas atribuições para promover um ambiente educacional 
            eficaz no IFAL. Isso inclui informar os estudantes sobre seus direitos e deveres, facilitar a expansão dos 
            direitos estudantis, e atuar como intermediário entre os alunos e os órgãos competentes. A diretoria 
            participa ativamente de discussões acadêmicas, buscando adequar o ensino às diretrizes nacionais e às 
            necessidades locais. Além disso, ela promove projetos extracurriculares para enriquecer a formação integral 
            dos estudantes, monitora as necessidades de infraestrutura e incentiva a oferta de cursos gratuitos em 
            diversas áreas. A Diretoria também estimula grupos de estudos, atividades científicas, e a participação 
            em eventos educacionais e científicos, visando aprimorar habilidades e proporcionar oportunidades de 
            aprendizado diferenciadas. A seleção de colaboradores para a Diretoria é realizada visando contribuições 
            valiosas na área educacional, representando os interesses dos estudantes.
        `,
        img: "#EC9192",
    },
    {
        title: "Diretoria de Assuntos Políticos",
        director: "Alexsandro Medeiros",
        text:
            `
            A Diretoria de Assuntos Políticos do Grêmio do IFAL desempenha um papel essencial na promoção de relações 
            e representação estudantil. Isso inclui fortalecer laços com outros campi, institutos e escolas, nacional 
            e internacionalmente, buscando parcerias e intercâmbios. Comprometida com a qualidade da educação, a 
            diretoria busca conquistas políticas para garantir direitos e promover políticas inclusivas. Representa 
            os interesses do Grêmio em diversas esferas políticas, estimula a participação dos estudantes em eventos 
            e trabalha pela conscientização política e cidadã. Zela pelas relações políticas do Grêmio com a 
            administração e outros órgãos acadêmicos, promovendo a articulação e representatividade estudantil. A 
            seleção de colaboradores é feita com foco em contribuições significativas na área política, representando 
            os interesses dos estudantes.
        `,
        img: "#28262C",
    },
    {
        title: "Diretoria de Comunicação Social",
        director: "Lywya Eugênia",
        text:
            `
            A Diretoria de Comunicação Social do Grêmio do IFAL tem como missão garantir a liberdade de expressão dos 
            estudantes, tanto dentro quanto fora do Instituto. Ela coordena as Relações Públicas do Grêmio, assegurando 
            a comunicação eficiente com instituições, entidades estudantis e a comunidade em geral. Além disso, a 
            diretoria cuida da comunicação interna e externa, promovendo transparência e divulgando ações e eventos 
            relevantes. Mantém os membros do Grêmio informados por meio de diversos canais, como websites e redes 
            sociais. A Diretoria de Comunicação Social também apoia a criação de meios de comunicação gerenciados 
            por estudantes, incentivando a produção de conteúdo informativo e o desenvolvimento de habilidades em 
            comunicação e jornalismo. A seleção de colaboradores para a diretoria é feita com o objetivo de representar 
            os interesses dos estudantes na área de comunicação.
        `,
        img: "#F0CF65",
    },
    {
        title: "Diretoria de Diversidade Étnica",
        director: "Yasmin Vitória",
        text:
            `
            A Diretoria de Diversidade Étnica tem como responsabilidades promover a educação e sensibilização para o 
            respeito às diversidades étnicas por meio de exposições, palestras e oficinas, visando construir uma cultura 
            de inclusão no Instituto. A diretoria empenha-se na resolução de problemas relacionados à discriminação 
            racial, adotando medidas preventivas, ações educativas e encaminhamento de casos específicos aos órgãos 
            competentes, visando um ambiente acadêmico livre de discriminação. Além disso, promove discussões na 
            comunidade acadêmica sobre questões relacionadas à juventude de diferentes etnias, contribuindo para uma 
            compreensão mais ampla das peculiaridades, desafios e demandas desses grupos, visando uma sociedade mais 
            justa e igualitária. A seleção de colaboradores para a Diretoria é feita com o objetivo de contribuir com 
            ideias, propostas e representar os interesses dos estudantes na promoção da diversidade étnica.
        `,
        img: "#006DAA",
    },
    {
        title: "Diretoria de Diversidade Sexual e de Gênero",
        director: "Lian Souza",
        text:
            `
            A Diretoria de Diversidade Sexual e de Gênero tem como missão promover a conscientização sobre diversidade 
            sexual e de gênero no ambiente acadêmico. Isso inclui a realização de exposições, palestras e oficinas, 
            visando criar um ambiente inclusivo e respeitoso. A diretoria também trabalha na resolução de problemas 
            relacionados à discriminação, abrangendo todas as formas, com ações de sensibilização e encaminhamento de 
            casos específicos. Além disso, promove discussões na comunidade acadêmica para fomentar a compreensão, 
            respeito e igualdade, contribuindo para um ambiente seguro. A seleção de colaboradores é feita para auxiliar 
            nas atividades de promoção da diversidade e inclusão, representando os interesses dos estudantes.
        `,
        img: "#ECCBD9",
    },{
        title: "Diretoria de Esportes",
        director: "Lara Beatriz",
        text:
            `
            À Diretoria de Esportes compete propor e executar projetos e atividades desportivas para o corpo discente do 
            Instituto, visando o desenvolvimento físico, mental e social dos estudantes por meio da prática esportiva. 
            Além disso, a diretoria auxilia na organização de eventos desportivos, como competições internas, intercampi 
            e interinstitucionais, promovendo oportunidades de participação e integração dos estudantes em diversas 
            modalidades esportivas. Busca incentivar a prática esportiva entre os estudantes por meio da divulgação de 
            informações, disponibilização de recursos e criação de parcerias com entidades esportivas e instituições 
            afins. A seleção de colaboradores para a Diretoria de Esportes é realizada com o objetivo de auxiliar nas 
            atividades e projetos relacionados à promoção do esporte, contribuindo com ideias, propostas e representando 
            os interesses dos estudantes nesse contexto.
        `,
        img: "#63474D",
    },{
        title: "Diretoria da Mulher",
        director: "Débora Ruthe",
        text:
            `
            À Diretoria da Mulher compete promover a conscientização e respeito aos direitos das mulheres por meio de 
            exposições, palestras e oficinas, buscando combater a discriminação de gênero e promover a igualdade de 
            oportunidades. A diretoria atua como porta-voz e defensora dos interesses das estudantes em questões 
            relacionadas à igualdade de gênero, combate à violência contra a mulher e empoderamento feminino. Além disso, 
            reconhece e defende os direitos econômicos, sociais, culturais e ambientais das mulheres, buscando garantir 
            a equidade de oportunidades, inclusão e valorização da diversidade de gênero no ambiente acadêmico. A seleção 
            de colaboradores para a Diretoria da Mulher é realizada com o objetivo de auxiliar nas atividades e projetos 
            relacionados à promoção dos direitos das mulheres, contribuindo com ideias, propostas e representando os 
            interesses das estudantes nesse contexto.
        `,
        img: "#EA3788",
    },{
        title: "Diretoria de Saúde e Meio Ambiente",
        director: "Girlene de Oliveira",
        text:
            `
            A Diretoria de Saúde e Meio Ambiente tem como atribuições promover palestras, exposições e concursos para 
            conscientizar os estudantes sobre a importância da preservação ambiental e promoção da saúde. Além disso, 
            trabalha para garantir direitos e inclusão das pessoas com deficiência, assegurando acesso igualitário às 
            atividades e espaços do Instituto Federal. Mantém comunicação com entidades da saúde e meio ambiente, 
            buscando parcerias para desenvolver ações sustentáveis. Incentiva hábitos de higiene e conservação do 
            ambiente escolar por meio de campanhas e ações de reciclagem. A seleção de colaboradores visa auxiliar nas 
            atividades relacionadas à saúde e meio ambiente, representando os interesses dos estudantes.
        `,
        img: "#709775",
    },{
        title: "Diretoria Social e de Eventos",
        director: "Estefane Mota",
        text:
            `
            Compete à Diretoria Social e de Eventos prestar assistência e lutar pela garantia dos direitos individuais e 
            coletivos dos estudantes, buscando criar um ambiente inclusivo, acolhedor e respeitoso. Zela pelo bom 
            relacionamento do Grêmio com seus associados e a comunidade acadêmica, promovendo a integração e 
            participação ativa dos estudantes em atividades sociais. Propõe, planeja e organiza festas e eventos, 
            considerando a diversidade de interesses dos estudantes e priorizando a segurança, diversão e bem-estar de 
            todos os participantes. Auxilia no planejamento de festas e eventos promovidos pela Direção do Instituto, 
            contribuindo para uma agenda de atividades sociais que promovam a integração e o espírito de comunidade no 
            ambiente acadêmico. A seleção de colaboradores para a Diretoria visa auxiliar nas atividades e projetos 
            relacionados às áreas social e de eventos, contribuindo com ideias, propostas e representando os interesses 
            dos estudantes nesse contexto.
        `,
        img: "#EEA243",
    },
    {
        title: "Diretoria de Tecnologia e Inovação",
        director: "Eduardo Lucas",
        text:
            `
            A Diretoria de Tecnologia e Inovação tem como responsabilidades sugerir melhorias nas plataformas virtuais, 
            fiscalizar a infraestrutura dos laboratórios e recursos utilizados nas aulas práticas para garantir a 
            qualidade do ensino, acompanhar as necessidades dos grupos de pesquisa e extensão, desenvolver e manter 
            serviços digitais para ampliar a comunicação dos discentes com o Grêmio. Além disso, estabelece contato 
            frequente com a CTI e outros departamentos do Instituto Federal de Alagoas, promove eventos e projetos 
            inovadores na área da tecnologia em parceria com os estudantes, e seleciona colaboradores para auxiliar nas 
            atividades e projetos relacionados à tecnologia, contribuindo com ideias, propostas e representando os 
            interesses dos estudantes nesse contexto.
        `,
        img: "#55286F",
    }
]
export default data;