
while True:
    n = int(input("Número de premiados: "))

    if n > 0 and n <=1000:
        break

t1 = 0
t2 = 0
for i in range(n):
    while True:
        c = int(input("Tamanho da camisa: "))
        if c == 1 or c == 2:
            break
    if c == 1:
        t1 += 1
    else:
        t2 += 1    

while True:
    p = int(input("Número de pequenas: "))
    if p > 0:
        break

while True:
    m = int(input("Número de pequenas: "))
    if m > 0:
        break        


if p >= t1 and m >= t2:
    print("S")
else:
    print("N")