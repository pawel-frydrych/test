export class Test { 
function initialize() {
    Array.from({ length: this.size }, () => this.worker());
  }
}