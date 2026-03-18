def isvowel(str):
    return str.lower() in 'aeiouy'
    
n=int(input())
arr = list(map(str, input().split(' ')))

vwl=0
score = 0
for i in arr:
    for j in i:
        if isvowel(j):
            vwl+=1
    if vwl%2==0:
        score += 2
    else:
        score += 1
    vwl=0

print(score)