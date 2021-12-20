def displayPathtoPrincess(n,grid):
    for i in range(n):
        for j in range(n):
            if grid[i][j] == 'p':
                px = i
                py = j
            if grid[i][j] == 'm':
                mx = i
                my = j
    if px > mx:
        for i in range(mx,px):
            print('UP')
    else:
        for i in range(px,mx):
            print('DOWN')
    if py > my:
        for i in range(my,py):
            print('LEFT')
    else:
        for i in range(py,my):
            print('RIGHT') 