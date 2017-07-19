import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
points= new ReactiveVar([]);
ddapoints = new ReactiveVar([]);
berspoints = new ReactiveVar([]);
var newChattersDep = new Tracker.Dependency();
var newDDA = new Tracker.Dependency();
var newBers = new Tracker.Dependency();
Template.hello.onCreated(function helloOnCreated() {
  this.points = points;
});


Template.hello.helpers({
  point(){
    newChattersDep.depend();
     return points.get();
  },
  double(n){
    return 2*n;
  },
  ddap(){
    newDDA.depend();
    return ddapoints.get();
  },
  bersp(){
    newDDA.depend();
    return berspoints.get();
  },
  isnegative(number){
    if(number <0){
      return true;
    }
  },
  addone(x){
    return x+1;
  },
  lessthan(x, y){
    if(x<y) return true;
  }
});

Template.hello.events({
  'click #bersgo'(event, instance){
    dx0 = $("#bers-x0").val();
    dx1 = $("#bers-x1").val();
    dy0 = $("#bers-y0").val();
    dy1 = $("#bers-y1").val();
    counter = 0;
    m = (dy1 - dy0) / (dx1 - dx0);
    x= parseInt(dx0);
    y = parseInt(dy0);
    dx = dx1 - dx0;
    dy = dy1 - dy0;
    ddy = 2*dy;
    ddx = 2*dx;
    ddymx = ddy - ddx;
    p0 = ddy - dx;
    p = p0;
    if(m < 1){
      for(i=0; i<dx; i++){
        if(p < 0){
          x+=1;
          var foo = berspoints.get(counter);

          newDDA.changed();
          foo.push({xp: x, yp: y, pv: p});
              p += ddy;
        }else{
          x+=1;
          y+=1;
          var foo = berspoints.get(counter);
          newDDA.changed();
          foo.push({xp: x, yp: y, pv: p});
              p += ddy - ddx;
        }
      }
    }
  },
  'click #ddago'(event, instance){
    dx0 = $("#dda-x0").val();
    dx1 = $("#dda-x1").val();
    dy0 = $("#dda-y0").val();
    dy1 = $("#dda-y1").val();
    counter = 0;
    m = (dy1 - dy0) / (dx1 - dx0);
    x= parseInt(dx0);
    y = parseInt(dy0);
    dx = dx1 - dx0;
    if(m < 1){
      for(i=0; i<dx; i++){
        x+=1;
        y+=m;
        ny = parseInt(y+0.5);
        var foo = ddapoints.get(counter);
        newDDA.changed();
        foo.push({xp: x, yp: y, nyp: ny, nxp: x});
      }
    }else{
      for(i=0; i<dx; i++){
        x+=(1/m);
        y+=1;
        nx = parseInt(x+0.5);
        var foo = ddapoints.get(counter);
        newDDA.changed();
        foo.push({xp: x, yp: y, nyp: y, nxp: nx});
        counter +=1;
    }
  }
  },
  'click #midpointgo'(event, instance) {
    r = $("#radius").val();
    counter = 1;
    var x0=0;
    var y0=r;
    var p0 = 1-r;
    var x=x0;
    var p = p0;
    var y=y0;

    while(x<y){
      if(p < 0){
x+=1;


        var foo = points.get(counter);
        foo.push({xp: x, yp: y, pv: p});
            p+= 2*x +1;
        counter +=1;

      }else{
        x+=1;
        y-=1;


        var foo = points.get(counter);
        foo.push({xp: x, yp: y, pv: p});
              p+= 2*x +1 - 2*y;
        counter +=1;
      }
    }
    newChattersDep.changed();
         console.log(points.get());
},
});
