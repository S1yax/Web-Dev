#task 1 гипотенуза
import math
a=float(input())
b=float(input())
print(math.sqrt(math.pow(a,2) + math.pow(b,2)))

# #task 2 
a=int(input())
prv=a-1;
nxt=a+1
print(f"The next number for the number {a} is {nxt}" )
print(f"The previous number for the number {a} is {prv}" )

#task 3
n=int(input())
k=int(input())
print(k//n)

#task 4
n=int(input())
k=int(input())
print(k%n)

#task 5
v = int(input())
t = int(input())
distance = (v * t) % 109
if distance < 0:
    distance += 109
print(distance)

#Conditional Statements
#task1
a=int(input())
b=int(input())
print(max(a,b))

#task2
year=int(input())
if (year%4==0 and year%100!=0) or (year%400==0):
    print("YES")
else:
    print("NO")    

#task 3
system_answer = int(input())
student_answer = int(input())

if system_answer == 1:
  if student_answer == 1:
    print("YES")
  else:
    print("NO")
else:
  if student_answer == 1:
    print("NO")
  else:
    print("YES")

#task 4
x=int(input())
if x>0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)

#task 5
a=int(input())
b=int(input())
if(a>b):
    print(1)
elif b < a:
    print(2)
else:
    print(0)


#for loop
#task 1
a=int(input())
b=int(input())

for i in range(a,b+1):
   if(i%2==0):
      print(i, end=" ")

#task 2
a=int(input())
b=int(input())
c=int(input())
d=int(input())

for i in range(a,b+1):
    if(i%d==c):
        print(i, end = " ")

#task 3
import math
a=int(input())
b=int(input())

for i in range(a,b+1):
    if(i % math.sqrt(i) == 0):
        print(i, end=" ")

#task 3.1
x=int(input())
d=int(input())
cnt=0

x_str=str(x)
for i in x_str:
    if int(i)==d:
        cnt+=1

print(cnt)

#task 3.2
x=str(input())
sum=0
for i in x:
    sum+=int(i)

print(sum)

#task 3.3
x=str(input())
print(int(x[::-1]))

#task 4
x=int(input())

for i in range (2, x + 1):
    if x % i == 0:
        print(i)
        break

#task 5
x=int(input())

for i in range(1,x+1):
    if x % i == 0:
        print(i,end=" ")

#task 6
import math

x = int(input())
count = 0

for i in range(1, int(math.sqrt(x)) + 1):
    if x % i == 0:
        if i * i == x:
            count += 1
        else:
            count += 2

print(count)

#task 7
total = 0

for _ in range(100):
    total += int(input())

print(total)

#task 8
sum = 0
a=int(input())
for _ in range(a):
    sum += int(input())

print(sum)

#task 8.1
binary = input()
decimal = int(binary, 2)
print(decimal)

#task 9
a=int(input())
count = 0

for i in range(1,a + 1):
    num = int(input())
    if(num == 0):
        count += 1

print(count)

#while loop
#task 1
import math
a = int(input())
i=1
while i <= a:
    if(i % math.sqrt(i) == 0):
        print(i)
    i+=1

#task 2
a = int(input())

i = 1
while i <= a:
    if a % i == 0 and i > 1:
        print(i)
        break
    i+=1

#task 3
a = int(input())

i = 1
while i <= a:
    print(i, end = " ")
    i*=2

#task 4
n = int(input())

while n > 1 and n % 2 == 0:
    n //= 2

if n == 1:
    print("YES")
else:
    print("NO")

#task 5
n = int(input())
k = 0

while n > 1:
    n = (n + 1) // 2
    k += 1

print(k)

#array(lists)
#task 1
n = int(input())
arr = list(map(int, input().split()))

for i in range(0, n , 2):
    print(arr[i], end =" ")

#task 2
a = int(input())
arr = list(map(int,input().split()))

for i in range(0,a):
    if arr[i] % 2 == 0 :
        print(arr[i], end = " ")
    
#task 3
a = int(input())
arr = list(map(int,input().split()))
count = 0

for i in range(0,a):
    if arr[i] > 0 :
        count += 1

print(count)

#task 4
a = int(input())
arr = list(map(int,input().split()))
count = 0

for i in range(a - 1):
    if arr[i ] < arr[i + 1] :
        count += 1

print(count)

#task 5
a = int(input())
arr = list(map(int,input().split()))
result = "NO"
for i in range(a - 1):
    if arr[i ] * arr[i + 1] > 0 :
        result = "YES"
        break

print(result)

#task 6
a = int(input())
arr = list(map(int,input().split()))
count = 0

for i in range(1,a - 1):
    if arr[i] > arr[i + 1] and arr[i] > arr[i - 1] :
        count += 1

print(count)

#task 7
a = int(input())
arr = list(map(int,input().split()))

for i in reversed(arr):
    print(i, end = " ")

#functions 
