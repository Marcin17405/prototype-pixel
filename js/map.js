class Map {
  constructor(tileSize, mapData, tilesetImgSrc) {
    this.tileSize = tileSize;
    this.mapData = mapData;
    this.tileset = new Image();
    this.tileset.src = tilesetImgSrc;
  }
  
    draw(ctx) {
      var	tileSize	= 16;   
      var	imageNumTiles	= 11;
      for(var	i	= 0;	i< this.mapData.length;	i++)	{	
        for(var	j	= 0;	j	< this.mapData[i].length;	j++)	{	
          var	tile	= this.mapData[i][j];														
          var	tileRow	=	(tile	/	imageNumTiles)	|	0;
          var	tileCol	=	(tile	%	imageNumTiles)	|	0;	
          ctx.drawImage(this.tileset,	(tileCol	*	tileSize),	(tileRow	*	tileSize),	tileSize,	tileSize,	(j	*	tileSize),	(i	*	tileSize),	tileSize,	tileSize);															
        }	
      }
      
      
    }
  }
  export {Map};