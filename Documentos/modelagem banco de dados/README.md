# **Modelo Relacional do Banco de Dados**

Definimos os dados e a melhor estruta para armazenamento das informações coletadas juntamente com o PO do projeto. Até o momento, são 5 entidades:

* User: contêm chave única para identificação do dispositivo sem identificar diretamente o usuário.
* Occurrences: possui chave única para cada ocorrência, o identificador do dispositivo que enviou, data de envio, data da ocorrência, faixa etária da vítima, janela temporal de ocorrência da violência, situação elencadas e o diagnóstico de tipo de violências.
* User_occurrences: apresenta a identificação de todos os registros realizados, o dispositivio que a enviou e a data da ocorrência. 
* ViolenceSituations: apresenta a descrição das opções de violência da entidade Occurrences de acordo com as opções apresentadas no formulário. 
* TypesOfViolence: relaciona o campo tipo de violência da entidade Occurrences com os tipos de violência (moral, física...)


## **Acesso**

Para ter acesso ao modelo:

[Modelo Banco de Dados](https://erd.dbdesigner.net/designer/schema/1711024646-mapa-da-violencia)
