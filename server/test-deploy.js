console.log("=== DEPLOYMENT TEST ===");
console.log("Current time:", new Date().toISOString());
console.log("Node version:", process.version);
console.log("Environment:", process.env.NODE_ENV);

// Test if GraphicsMagick is available
const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

async function testGraphicsMagick() {
  try {
    const { stdout } = await execAsync('which gm');
    console.log("GraphicsMagick found at:", stdout.trim());
    
    const { stdout: version } = await execAsync('gm version');
    console.log("GraphicsMagick version:", version.trim());
    
    return true;
  } catch (error) {
    console.log("GraphicsMagick NOT found:", error.message);
    return false;
  }
}

testGraphicsMagick().then(found => {
  console.log("GraphicsMagick available:", found);
  console.log("=== TEST COMPLETE ===");
});
