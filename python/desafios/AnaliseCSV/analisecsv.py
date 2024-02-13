import sys
import csv
from datetime import date

argv = sys.argv

def main():
    validar_input(argv)
    
    arquivo = argv[1]

    vendas_por_mes = vendas(arquivo)

    print(vendas_por_mes)

#Ter certeza de que o usuário digitou o número de argumentos corretamente
def validar_input(argv):
    if len(argv) != 2:
        print("[ERRO] Uso: analisecsv.py arquivo.csv")
        exit(1)

    return argv[1]

#olhar cada linha do arquivo, realizando ações
def vendas(arquivo):
    meses = {}
    try:
        with open(arquivo, 'r') as file:
            DictReader = csv.DictReader(file)
            for row in DictReader:
                try:
                    total_vendas = imprimir_vendas_por_unidade(row)
                    contar_vendas_por_mes(row, total_vendas, meses)

                #caso não consiga analisar o produto    
                except ValueError as e:
                    print(f'Falha ao analisar o produto {row['produto']}')  
    
    #caso não consiga ler o arquivo
    except FileNotFoundError:
        print(f"O arquivo '{arquivo}' não foi encontrado")
        exit(1)    
    except Exception as e:
        print(f"Erro ao processar o arquivo: {e}")
        exit(1)

    return meses

#contar o total por produto e imprimir
def imprimir_vendas_por_unidade(row):

    quantidade = float(row['quantidade'])
    preco_unitario = float(row['preco_unitario'])
    total_vendas = quantidade * preco_unitario   

    print(f'{row['produto']}:  {total_vendas:.2f}')

    return total_vendas

#conta as vendas por mês
def contar_vendas_por_mes(row, total_vendas, meses):

    dataiso = date.fromisoformat(row['data_venda'])
    mes = dataiso.strftime("%m")

    if mes not in meses:
        meses[mes] = total_vendas
    else:
        meses[mes] += total_vendas

    return meses
 
#Verificar se o programa tem um main e executá-lo primeiro
if __name__ == "__main__":
    main()
