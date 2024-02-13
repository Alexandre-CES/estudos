import sys
import csv

argv = sys.argv

def main():
    database, sequence = get_argv()

    people, header = get_people(database)

    repeats = get_repeats(header, sequence)
    
    result = dna_cmp(people, repeats)

    if result:
        print(result)
    else:
        print('No Match!')

#Obter nome de arquivoso que serão aberto e confirmar uso correto
def get_argv():
    if len(argv) != 3:
        print('[Error!] Usage: dna.py database/[large / small] sequences/[1 / 2...')
        exit(1)

    return argv[1], argv[2]

#Captar as pessoas e seus dados de DNA
def get_people(database):
    people, header = [], [] #declaração da dictonary que possui os dados das pessoas
    
    #abrindo arquivo csv para leitura como um dictionary
    with open(database, newline='') as csvfile:

        reader = csv.reader(csvfile)
        #pegar o header contendo as sequências e obter sequência das pessoas
        i = 0
        for row in reader:
            if i == 0:
                header.extend(row)
                header.remove('name')
                i += 1
            else:
                people.append(row)

    return people, header

#contar as sequências de DNA
def get_repeats(header, sequence):
    repeats = {}

    #abrir o arquivo contendo a sequência
    with open(sequence, 'r') as file:
        dna_sequence = file.read()

        #repetir para todos os STRs do cabeçalho
        for str_marker in header:
            max_repeat = find_max_repeats(dna_sequence.upper(), str_marker)
            repeats[str_marker] = max_repeat

    return list(repeats.values())

#obter o máximo de repetições de uma sequência
def find_max_repeats(dna_sequence, str_marker):
    max_repeat = 0
    index = 0

    #repetir enquanto o index for menor que a sequência
    while index + len(str_marker) <= len(dna_sequence):
        current_repeat = 0

        #repetir enquanto tiver a sequência atual
        while dna_sequence[index : index + len(str_marker)] == str_marker:
            current_repeat += 1
            index += len(str_marker)

        #comparar entre o máximo anterior e as repetições atuais
        max_repeat = max(max_repeat, current_repeat)
        index += 1
       
    return max_repeat    

#ver de quem é a sequência e imprimir
def dna_cmp(people, repeats):

    #repetir até passar por todas as pessoas
    for person in people:

        #comparar dentro de uma lista
        if repeats == list(map(int, person[1:])):
            return person[0]
    return None        
main()
