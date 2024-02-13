
def main():
    while True: #impedir números negativos
        d = float(input("Qual o valor do troco?" ))
        if d > 0:
            break

    p = 0
    s = 0
    t = 0
    q = 0

    d *= 100 #converter para centavos

    while d >= 25:
        q += 1
        d -= 25
    while d >= 10:
        t += 1
        d -= 10   
    while d >= 5:
        s += 1
        d -= 5
    while d >= 1:
        p += 1
        d -= 1        

    print(f'25c = {q}, 10c = {t}, 5c = {s}, 1c = {p}')    

main()  #chamar função main 