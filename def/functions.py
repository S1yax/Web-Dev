def fin_maxx(num):
    if not num:
        return None
    max_num = num[0]
    for num in num:
        if num > max_num:
            max_num = num
    return max_num
def count_vowels(s):
    vowels = 'aeiouAEIOU'
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count
print (fin_maxx([3, 1, 4, 1, 5, 9])) 
print (count_vowels("Hello World"))