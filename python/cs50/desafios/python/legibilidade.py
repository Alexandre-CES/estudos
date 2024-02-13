

def main():
    texto = input("Texto: ")    

    letras, palavras, frases = contar(texto) #contabilizar informações do texto
    index = indexar(letras, palavras, frases) #calcular o grau do texto
    print_index(index) #printar o grau do texto

def contar(texto):
    letras = 0
    palavras = 1
    frases = 0

    for i in texto:
        if i.isalpha():
            letras += 1
        if i in ['.', '!', '?:']:
            frases += 1    
        if i in [' ']:
            palavras += 1
    
    return letras, palavras, frases

def indexar(letras, palavras, frases):
    l = letras * 100 / palavras
    s = frases * 100 / palavras
    index = round(0.0588 * l - 0.296 * s - 15.8)

    return index

def print_index(index):
    if index < 1:
        print("Before Grade 1")
    elif index > 16:
        print("Grade 16+")
    else:
        print(f"Grade {index}")

main()   