import sys
from Queue import PriorityQueue

f = open(sys.argv[1])
n = int(f.readline())
q = PriorityQueue()
for line in f:
  q.put((-len(line), line))

for i in xrange(n):
  print q.get()[1].strip('\n')
