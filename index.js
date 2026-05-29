#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Product Foundry CLI
 * Initializes a new Product Foundry workspace by copying framework files
 * into the current directory.
 */

const FRAMEWORK_DIRS = ['.ai', '.product', '.github'];
const FRAMEWORK_FILES = ['README.md', 'WHY-PRODUCT-FOUNDRY.md'];

function log(message, type = 'info') {
  const colors = {
    info: '\x1b[36m',    // cyan
    success: '\x1b[32m', // green
    warn: '\x1b[33m',    // yellow
    error: '\x1b[31m',   // red
    reset: '\x1b[0m'
  };
  
  const color = colors[type] || colors.info;
  console.log(`${color}${message}${colors.reset}`);
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);
  
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

function initializeWorkspace() {
  const cwd = process.cwd();
  const packageDir = path.dirname(require.main.filename);
  
  log('\n🔥 Product Foundry Workspace Initialization\n', 'info');
  
  // Check if workspace already has framework files
  const hasExisting = FRAMEWORK_DIRS.some(dir => 
    fs.existsSync(path.join(cwd, dir))
  );
  
  if (hasExisting) {
    log('⚠️  Framework files already exist in this directory.', 'warn');
    log('Skipping initialization to avoid overwriting existing work.\n', 'warn');
    process.exit(0);
  }

  try {
    // Copy framework directories
    log('📦 Setting up framework files...', 'info');
    
    FRAMEWORK_DIRS.forEach(dir => {
      const src = path.join(packageDir, dir);
      const dest = path.join(cwd, dir);
      
      if (fs.existsSync(src)) {
        copyDirRecursive(src, dest);
        log(`   ✓ ${dir}/`, 'success');
      }
    });

    // Copy documentation files
    FRAMEWORK_FILES.forEach(file => {
      const src = path.join(packageDir, file);
      const dest = path.join(cwd, file);
      
      if (fs.existsSync(src) && !fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
        log(`   ✓ ${file}`, 'success');
      }
    });

    log('\n✅ Workspace initialized successfully!\n', 'success');
    
    log('📖 Next steps:\n', 'info');
    log('1. Open this folder in your editor (VS Code, etc.)', 'info');
    log('2. Start your AI assistant:', 'info');
    log('   • GitHub Copilot: Ctrl+Shift+I / Cmd+Shift+I', 'info');
    log('   • Claude: Add this folder as a project', 'info');
    log('   • Kiro: Open the Kiro chat panel', 'info');
    log('   • Other: Load .ai/system-prompt.md as your system prompt', 'info');
    log('3. Send a message to get started\n', 'info');
    
    log('📚 Documentation:', 'info');
    log('   • .ai/README.md - AI system overview', 'info');
    log('   • .ai/system-prompt.md - Core instructions', 'info');
    log('   • .ai/product-constitution.md - Governing principles', 'info');
    log('   • WHY-PRODUCT-FOUNDRY.md - Philosophy and rationale\n', 'info');

  } catch (error) {
    log(`\n❌ Error during initialization: ${error.message}\n`, 'error');
    process.exit(1);
  }
}

// Run initialization
initializeWorkspace();
