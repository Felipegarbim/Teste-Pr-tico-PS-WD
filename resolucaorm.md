      ### RESOLUÇÃO RM
      
       Neste processo, ao ser responsável por um software de gestão de produtos, após alguma alteração no sistema com uma rotina que não foi devidamente testada, o banco de dados foi totalmente quebrado.

     Não houve uma perda completa dos dados, mas eles não se encontram mais no esperado pelo sistema. 
A partir de agora iremos recuperar os dados e deixa-los no formato adequeado novamente. Para isso, vou realizar alguns métodos para as correções.
O projeto conta com as seguintes questões a serem resolvidas:

    ## Todos os nomes de produto tiveram alguns caracteres modificados, houve substituição de todos os "a" por "æ", "c" por "¢", "o" por "ø", "b" por "ß". É preciso reverter essas substituições para recuperar os nomes originais. 
     Os preços dos produtos devem ser sempre do tipo number, mas alguns deles estão no tipo string. É necessário transformar as strings novamente em number.
     Nos produtos onde a quantidade em estoque era zero, o atributo "quantity" sumiu. Ele precisa existir em todos os produtos, mesmo naqueles em que o estoque é 0.

     A Seguir veremos como fiz o projeto para resolver estas questões.

    ## O projeto foi divido em uma pasta de objetos, uma pasta de serviços, uma pasta validationSchema, além do arquivo resolução.js.
     Foi criada uma service dataFix, aonde foi exportada a função normalize database, responsável por organizar uma iteração entre os objetos do broken database, e através da função normalizeProduct realizar a correção de cada objeto iterado com o auxílio das funções fixName, fixQuantity e fixPrice.

     É importante observar que dentro das funções fixName, fixQuantity e fixPrice foi realizada a validação dos dados através do validationSchema, retornando o dado corrigido, ou em caso de erro encontrado pela validação, um novo objeto com a descrição dos erros encontrados durante a iteração do database.

     Foi criada uma service para lidar com a gravação dos dados chamada directory service, aonde foi utilizada uma função assíncrona afim de lidar com essa atividade custosa da gravação de dados..

     ## sortService -  Para a ordenação, busquei uma função que realiza a ordenação dos dados em função de duas variáveis. 
A Função foi encontrada através do seguinte link: “https://stackoverflow.com/questions/13211709/javascript-sort-array-by-multiple-number-fields”;

     ## Em validationSchema foi utilizada a biblioteca JOI para fazer a validação dos dados corrigidos, afim de verificar se houve algum erro durante a normalização dos dados. Link da biblioteca: https://www.npmjs.com/package/joi
    Em name ocorreu a validação quando retornado uma string, e verificado se não é nulo.
     Em price ocorreu a validação, quando retornado um number, verificado se possui 2 casas decimais, se é positivo, e se não é nulo.
     E em quantity ocorreu a validação quando retornado um number, verificado se é inteiro, e se não é nulo.
