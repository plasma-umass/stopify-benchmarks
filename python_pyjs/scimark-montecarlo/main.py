import math

def array(type, init = []):
  return init

class Array2D(object):
    def __init__(self, w, h, data=None):
        self.width = w
        self.height = h
        self.data = array('d', [0]) * (w*h)
        if data is not None:
            self.setup(data)

    def _idx(self, x, y):
        if 0 <= x < self.width and 0 <= y < self.height:
            return y*self.width + x
        raise IndexError

    def __getitem__(self, (x, y)):
        return self.data[self._idx(x, y)]

    def __setitem__(self, (x, y), val):
        self.data[self._idx(x, y)] = val

    def __cmp__(self, other):
        return cmp(self.data, other.data)

    def setup(self, data):
        for y in xrange(self.height):
            for x in xrange(self.width):
                self[x, y] = data[y][x]
        return self

    def indexes(self):
        for y in xrange(self.height):
            for x in xrange(self.width):
                yield x, y

    def copy_data_from(self, other):
        self.data[:] = other.data[:]

class Random(object):
    MDIG = 32
    ONE = 1
    m1 = (ONE << (MDIG-2)) + ((ONE << (MDIG-2) )-ONE)
    m2 = ONE << MDIG/2
    dm1  = 1.0 / float(m1);

    def __init__(self, seed):
        self.initialize(seed)
        self.left = 0.0
        self.right = 1.0
        self.width = 1.0
        self.haveRange = False

    def initialize(self, seed):
    
        self.seed = seed
        seed = abs(seed)
        jseed = min(seed, self.m1)
        if (jseed % 2 == 0):
            jseed -= 1
        k0 = 9069 % self.m2;
        k1 = 9069 / self.m2;
        j0 = jseed % self.m2;
        j1 = jseed / self.m2;
        self.m = array('d', [0]) * 17 
        for iloop in xrange(17):
            jseed = j0 * k0;
            j1 = (jseed / self.m2 + j0 * k1 + j1 * k0) % (self.m2 / 2);
            j0 = jseed % self.m2;
            self.m[iloop] = j0 + self.m2 * j1;
        self.i = 4;
        self.j = 16;

    def nextDouble(self):
        I, J, m = self.i, self.j, self.m
        k = m[I] - m[J];
        if (k < 0):
            k += self.m1;
        self.m[J] = k;

        if (I == 0):
            I = 16;
        else:
            I -= 1;
        self.i = I;

        if (J == 0):
            J = 16;
        else:
            J -= 1;
        self.j = J;

        if (self.haveRange):
            return  self.left +  self.dm1 * float(k) * self.width;
        else:
            return self.dm1 * float(k);

    def RandomMatrix(self, a):
        for x, y in a.indexes():
            a[x, y] = self.nextDouble()
        return a

    def RandomVector(self, n):
        return array('d', [self.nextDouble() for i in xrange(n)])
    

class ArrayList(Array2D):
    def __init__(self, w, h, data=None):
        self.width = w
        self.height = h
        self.data = [array('d', [0]) * w for y in xrange(h)]
        if data is not None:
            self.setup(data)

    def __getitem__(self, idx):
        if isinstance(idx, tuple):
            return self.data[idx[1]][idx[0]]
        else:
            return self.data[idx]

    def __setitem__(self, idx, val):
        if isinstance(idx, tuple):
            self.data[idx[1]][idx[0]] = val
        else:
            self.data[idx] = val

    def copy_data_from(self, other):
        for l1, l2 in zip(self.data, other.data):
            l1[:] = l2

def SOR_execute(omega, G, num_iterations):
    for p in xrange(num_iterations):
        for y in xrange(1, G.height - 1):
            for x in xrange(1, G.width - 1):
                G[x, y] = omega * 0.25 * (G[x, y-1] + G[x, y+1] + G[x-1, y] + G[x+1, y]) + \
                          (1.0 - omega) * G[x, y]
def SOR(args):
    n, cycles, Array = map(eval, args)
    a = Array(n, n)
    SOR_execute(1.25, a, cycles)
    return "SOR(%d, %d)" % (n, cycles)


def SparseCompRow_matmult(M, y, val, row, col, x, num_iterations):
    for reps in xrange(num_iterations):
        for r in xrange(M):
            sa = 0.0
            for i in xrange(row[r], row[r+1]):
                sa += x[ col[i] ] * val[i]
            y[r] = sa

def SparseMatMult(args):
    N, nz, cycles = map(int, args)
    x = array('d', [0]) * N
    y = array('d', [0]) * N
    result = 0.0
    nr = nz / N
    anz = nr * N
    val = array('d', [0]) * anz
    col = array('i', [0]) * nz
    row = array('i', [0]) * (N + 1)
    row[0] = 0
    for r in xrange(N):
        rowr = row[r]
        step = r / nr
        row[r+1] = rowr + nr
        if (step < 1):
            step = 1
        for i in xrange(nr):
            col[rowr + i] = i * step
    SparseCompRow_matmult(N, y, val, row, col, x, cycles);
    return "SparseMatMult(%d, %d, %d)" % (N, nz, cycles)

def MonteCarlo_integrate(Num_samples):
    rnd = Random(113)
    under_curve = 0
    for count in xrange(Num_samples):
        x = rnd.nextDouble()
        y = rnd.nextDouble()
        if x*x + y*y <= 1.0:
            under_curve += 1
    return float(under_curve) / Num_samples * 4.0

def MonteCarlo(args):
    n = int(args[0])
    MonteCarlo_integrate(n)
    return 'MonteCarlo(%d)' % n

MonteCarlo([50000])