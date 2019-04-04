// import pizzaDiagram from '../resources/pizza-collaboration.bpmn';
// import customElements from './custom-elements.json';

import CustomModeler from './custom-modeler';
import BpmnViewer from 'bpmn-js/lib/NavigatedViewer';

/* function main() {
  var modeler = new CustomModeler({
    container: '#canvas',
    keyboard: {
      bindTo: document
    }
  });

  modeler.importXML(pizzaDiagram, function(err) {

    if (err) {
      console.error('something went wrong:', err);
    }

    modeler.get('canvas').zoom('fit-viewport');

    modeler.addCustomElements(customElements);
  });
}
main() */

// window.BpmnJS = CustomModeler

// expose bpmnjs to window for debugging purposes
// window.bpmnjs = modeler;

window.RenderBpmn = function(option) {
  return {
    viewer: BpmnViewer,
    modeler: CustomModeler,
  }
}
