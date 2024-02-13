
def main():
    while True:
        card = int(input("Número do cartão: "))    
        if card > 0:
            break       

#parar o programa caso for certeza que não é válido sem cálculos
    if len(str(card)) < 13: 
        print("Invalid!")
        return     

    result = 0

    legitibilizar(card)
    if (result % 10) != 0:
        print("Invalid!")
        return
    verificar(card)

def legitibilizar(card):
    #cópia, multiplicações por dois e somente somas
    cpy, mult, soma = card, 0, 0

    #repetir até passar por toda a variável
    while cpy != 0:

        #somar ímpares
        soma += int(cpy % 10) 

        #se o número multiplicado for maior que dez, somar os dois dígitos
        if (int((cpy / 10) % 10) * 2) > 9:
            tmp = (int((cpy / 10) % 10) * 2)
            mult += (int((tmp % 10)) + (int(tmp / 10)))

        #se não, só somar o número ao total    
        else:
            mult = mult + (int((cpy / 10) % 10) * 2)

        #passar para o próximo    
        cpy = int(cpy / 100)

    #soma total
    result = mult + soma
    return result

def verificar(card):

    #armazenar o número de casas decimais do cartão - 1, para ver o último
    tmp = len(str(card)) - 1
    casas = 1
    for i in range(tmp):
        casas *= 10

    #
    if (len(str(card)) == 13 or 16) and (int(card / casas)) == 4:
        print('Visa')
    elif (len(str(card))) == 15:
        print('American Express')
    elif (len(str(card))) == 16:
        print('MasterCard')
main() 