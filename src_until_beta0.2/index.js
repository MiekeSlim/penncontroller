// The controller object itself
import "./controller.js";

// The preloaders
import "./preload/preload.js";
import "./preload/preloadZip.js";       //  Uses JSZip

// This defines the Instruction class
// It should always be imported
import "./instructions/instruction.js";
// List of specific instructions to import
import "./instructions/audio.js";
import "./instructions/button.js";
import "./instructions/canvas.js";
import "./instructions/clear.js";
//import "./instructions/complex.js";   // Obsolete since beta 0.1
import "./instructions/end.js";
import "./instructions/function.js";
import "./instructions/html.js";
import "./instructions/if.js";
import "./instructions/image.js";
import "./instructions/key.js";
import "./instructions/radio.js";
import "./instructions/save.js";
//import "./instructions/screen.js";    // TBI(?)
import "./instructions/selector.js";
import "./instructions/text.js";
import "./instructions/textInput.js";
import "./instructions/timer.js";
//import "./instructions/tooltip.js";   // TBI
import "./instructions/voice.js";       // Uses JSZip
import "./instructions/youtube.js";     // Uses code from Google


// Table handling
import "./tables.js";                   // Uses jQuery-CSV extension


// IBEX controller
import "./define_ibex_controller";

// Export PennController as a global object
window.PennController = PennController;