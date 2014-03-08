import sys

def fizzbuzz(a,b,n):
  fizz = lambda x: x % a == 0
  buzz = lambda x: x % b == 0
  vals = [i for i in xrange(n+1)]
  for i in xrange(n+1):
    if fizz(i):
      vals[i] = 'F'
    if buzz(i):
      vals[i] = 'B' if type(vals[i]) == int else 'FB'
  vals = [str(val) for val in vals[1:]]
  return ' '.join(vals)

def read():
  f = open(sys.argv[1], 'r')
  for line in f:
    args = [int(elm) for elm in line.split()]
    print fizzbuzz(*args)

  f.close()

if __name__ == '__main__':
  read()
