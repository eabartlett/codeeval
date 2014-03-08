import sys
from collections import defaultdict

def edit(w1,w2):
  """ 
  Function taking in 2 strings, w1 and w2, and returns
  the edit distance of the two words
  """
  
  #returns 0 if w1[i] == w2[j], 1 otherwise
  def same(i,j):
    return w1[i-1] == w2[j-1]
 
  mem = [[float('inf') for j in xrange(len(w2)+1)] for i in xrange(len(w1)+1)]
  
  # Initialization of base cases
  for i in xrange(len(w1)+1):
    mem[i][0] = i

  for i in xrange(len(w2)+1):
    mem[0][i] = i
    
  for i in xrange(1, len(w1)+1):
    for j in xrange(1, len(w2)+1):
      if abs(i - j) > 1:
        continue
      if same(i,j):
        mem[i][j] = mem[i-1][j-1]
        continue
      mem[i][j] = min(mem[i-1][j-1]+1, mem[i-1][j]+1, mem[i][j-1]+1) 
  return mem[len(w1)][len(w2)] 

def local_conn(w, wordbank):
  #returns number of words within 1 edit
  return [word for word in wordbank if edit(w, word) <=1]

def social_network(w, wordbank):
  #returns list of word w's social network
  words = defaultdict(lambda: False)
  conn = local_conn(w, wordbank)
  while conn:
    front = conn.pop(0) 
    words[front] = True
    conn += [word for word in local_conn(front, wordbank) if not words[word] and word not in conn]

  return words.values()

if __name__ == "__main__":
  f = open(sys.argv[1], 'r')
  wordbank, tests = [], []
  test = True
  for line in f:
    if line == "END OF INPUT\n":
      test = False
    if test:
      tests.append(line)
    else:
      wordbank.append(line)
  f.close()
  for word in tests:
    print(len(social_network(word, wordbank)))
