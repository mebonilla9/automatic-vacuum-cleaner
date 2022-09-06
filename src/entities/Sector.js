export class Sector{
    constructor(width,height,xFrom,xTo,yFrom,yTo,state){
        this.width = width
        this.height = height
        this.xFrom = xFrom
        this.yFrom = yFrom
        this.xTo = xTo
        this.yTo = yTo
        this.state = state
        this.shapes = []
    }
}