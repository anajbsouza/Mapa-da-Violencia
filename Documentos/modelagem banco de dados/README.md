# **Modelo Relacional do Banco de Dados**
Utilizaremos o banco de dados relacional, que consiste em uma forma direta de apresentar os dados utilizandos tabelas. 

Os dados serão coletados através do formulário disponível na página web. A estrutura do banco de dados foi definida juntamente com o Product Owner (PO) do projeto, resultando, até o momento, em cinco entidades: 

* **User**: contêm uma chave única para identificação do dispositivo, sem identificar diretamente o usuário; 
* **Occurrences**: possui uma chave única para cada ocorrência, o identificador do dispositivo que enviou, data de envio, data da ocorrência, faixa etária da vítima, janela temporal de ocorrência da violência, situações informadas e o diagnóstico dos tipos de violência; 
* **UserOccurrences**: apresenta a identificação de todos os registros realizados, o dispositivio que enviou e a data da ocorrência; 
* **ViolenceSituations**: apresenta a descrição das opções de violência da entidade Occurrences de acordo com as opções apresentadas no formulário; e
* **TypesOfViolence**: relaciona o campo tipo de violência da entidade Occurrences com os tipos de violência (física, moral, psicológica, patrimonial e sexual). 


## **Acesso**

Você pode acessar o modelo em: 
[Modelo Banco de Dados](https://erd.dbdesigner.net/designer/schema/1711024646-mapa-da-violencia)
