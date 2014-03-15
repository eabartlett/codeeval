import sys

def max_path(tri):
  row = len(tri) - 2
  while row >= 0:
    for i in xrange(len(tri[row])):
      tri[row][i] = tri[row][i] + max(tri[row+1][i], tri[row+1][i+1])

    row -= 1
  return tri[0][0]

def main():
  f = open(sys.argv[1], 'r')
  triangle = []
  for line in f:
    triangle.append([int(i) for i in line.strip().split(' ')])
  f.close()
  print max_path(triangle)

if __name__ == "__main__":
  main()
