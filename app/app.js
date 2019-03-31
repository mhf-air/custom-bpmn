// import pizzaDiagram from '../resources/pizza-collaboration.bpmn';
// import customElements from './custom-elements.json';

import CustomModeler from './custom-modeler';

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
  let modeler = new CustomModeler({
    container: "#" + option.id,
    keyboard: {
      bindTo: window,
    }
  })

  let $ = option.$
  if (!$) {
    console.error("jquery not included")
    return
  }

  $.get(option.url, openDiagram, 'text');

  function openDiagram(bpmnXML) {
    modeler.importXML(bpmnXML, function(err) {
      if (err) {
        return console.error('could not import BPMN 2.0 diagram', err)
      }

      // access modeler components
      let canvas = modeler.get('canvas')

      // zoom to fit full viewport
      canvas.zoom('fit-viewport');

      modeler.on("element.click", function(e) {
        if (option.onElementClick) {
          option.onElementClick(e)
        }
      })

      $("#" + option.id + " a.bjs-powered-by").hide()

      let saveBtn = $([
        '<div class="group">',
          '<button class="layui-btn" style="width: 100%;">',
            '保存',
          '</button>',
        '</div>'
      ].join(""))
      $("#" + option.id + " .djs-palette-entries").append(saveBtn)
      saveBtn.click(function() {
        modeler.saveXML({ format: true }, function(err, xml) {
          if (err) {
            return console.error('could not save BPMN 2.0 diagram', err);
          }
          if (option.onSave) {
            option.onSave(xml)
          }
        })
      })
    })
  }

  return modeler
}
