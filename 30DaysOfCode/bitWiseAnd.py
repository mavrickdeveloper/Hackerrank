

#
# Complete the 'bitwiseAnd' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER N
#  2. INTEGER K
#

def bitwiseAnd(N, K):
    maximum = 0
    for i in range(1, N +1):
        for j in range(1,i):
            h = i & j
            if maximum < h < K:
                maximum = h
            if maximum == K-1:
                return maximum
    return maximum