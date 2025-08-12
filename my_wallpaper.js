//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

let center = 100; 

function my_symbol() {
//base lines
line(0,0,200,200)
line(0,200,200,0)
line(0,100,200,100)
line(100,0,100,200)

Hoops();
}

function Hoops (){
//right side
line(center,70,120,80)
line(120,80,130,center)
line(130,center,120,120)
line(120,120,center,130)
//left side
line(center,70,80,80)
line(80,80,70,center)
line(70,center,80,120)
line(80,120,center,130)
}


