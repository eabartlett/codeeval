import sys
from collections import defaultdict

def cycle(l):
  nums = defaultdict(lambda:False)
  for i in xrange(len(l)):
    if type(nums[l[i]]) != bool:
      return l[nums[l[i]]:i]
    nums[l[i]] = i

  return []

def read():
  f = open(sys.argv[1], 'r')
  for line in f:
    print ' '.join(cycle(line.split()))

  f.close()

if __name__ == '__main__':
  read()
