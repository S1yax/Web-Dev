
n = int(input())
words = {}

for _ in range(n):
    w = input()
    if w in words:
        words[w] += 1
    else:
        words[w] = 1

print(len(words))
print(*words.values())