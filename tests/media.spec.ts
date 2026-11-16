import { test, expect } from '@playwright/test';

// sq-audio tests
test.describe('sq-audio', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/media/sq-audio.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders audio player', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-audio src="/audio.mp3"></sq-audio>';
    });
    await page.waitForTimeout(100);

    const audio = page.locator('sq-audio');
    await expect(audio).toBeVisible();
  });

  test('shows controls when enabled', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-audio src="/audio.mp3" controls></sq-audio>';
    });
    await page.waitForTimeout(100);

    const audio = page.locator('sq-audio');
    await expect(audio).toBeVisible();
  });

  test('supports different variants', async ({ page }) => {
    const variants = ['default', 'filled', 'subtle'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-audio src="/audio.mp3" variant="${v}"></sq-audio>`;
      }, variant);
      await page.waitForTimeout(100);

      const audio = page.locator('sq-audio');
      await expect(audio).toBeVisible();
      await expect(audio).toHaveAttribute('variant', variant);
    }
  });

  test('supports loop property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-audio src="/audio.mp3" loop></sq-audio>';
    });
    await page.waitForTimeout(100);

    const audio = page.locator('sq-audio');
    await expect(audio).toBeVisible();
  });

  test('supports muted property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-audio src="/audio.mp3" muted></sq-audio>';
    });
    await page.waitForTimeout(100);

    const audio = page.locator('sq-audio');
    await expect(audio).toBeVisible();
  });

  test('supports downloadable option', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-audio src="/audio.mp3" downloadable></sq-audio>';
    });
    await page.waitForTimeout(100);

    const audio = page.locator('sq-audio');
    await expect(audio).toBeVisible();
    await expect(audio).toHaveAttribute('downloadable', '');
  });
});

// sq-video tests
test.describe('sq-video', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/media/sq-video.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders video player', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-video src="/video.mp4"></sq-video>';
    });
    await page.waitForTimeout(100);

    const video = page.locator('sq-video');
    await expect(video).toBeVisible();
  });

  test('shows controls when enabled', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-video src="/video.mp4" controls></sq-video>';
    });
    await page.waitForTimeout(100);

    const video = page.locator('sq-video');
    await expect(video).toBeVisible();
  });

  test('supports poster image', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-video src="/video.mp4" poster="/poster.jpg"></sq-video>';
    });
    await page.waitForTimeout(100);

    const video = page.locator('sq-video');
    await expect(video).toBeVisible();
  });

  test('supports loop property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-video src="/video.mp4" loop></sq-video>';
    });
    await page.waitForTimeout(100);

    const video = page.locator('sq-video');
    await expect(video).toBeVisible();
  });

  test('supports muted property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-video src="/video.mp4" muted></sq-video>';
    });
    await page.waitForTimeout(100);

    const video = page.locator('sq-video');
    await expect(video).toBeVisible();
  });

  test('supports playsinline property', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-video src="/video.mp4" plays-inline></sq-video>';
    });
    await page.waitForTimeout(100);

    const video = page.locator('sq-video');
    await expect(video).toBeVisible();
  });
});

// sq-image tests
test.describe('sq-image', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/media/sq-image.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders image with src', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-image src="/image.jpg" alt="Test image"></sq-image>';
    });
    await page.waitForTimeout(100);

    const image = page.locator('sq-image');
    await expect(image).toBeVisible();
  });

  test('supports custom dimensions', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-image src="/image.jpg" width="300" height="200"></sq-image>';
    });
    await page.waitForTimeout(100);

    const image = page.locator('sq-image');
    await expect(image).toBeVisible();
  });

  test('supports different object-fit values', async ({ page }) => {
    const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'];
    
    for (const fit of fits) {
      await page.locator('#container').evaluate((f) => {
        document.querySelector('#container')!.innerHTML = `<sq-image src="/image.jpg" object-fit="${f}"></sq-image>`;
      }, fit);
      await page.waitForTimeout(100);

      const image = page.locator('sq-image');
      await expect(image).toBeVisible();
    }
  });

  test('lazy loading is enabled by default', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-image src="/image.jpg"></sq-image>';
    });
    await page.waitForTimeout(100);

    const image = page.locator('sq-image');
    await expect(image).toBeVisible();
  });
});

// sq-iframe tests
test.describe('sq-iframe', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/media/sq-iframe.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders iframe with src', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-iframe src="https://example.com" title="Example"></sq-iframe>';
    });
    await page.waitForTimeout(100);

    const iframe = page.locator('sq-iframe');
    await expect(iframe).toBeVisible();
  });

  test('supports different aspect ratios', async ({ page }) => {
    const ratios = ['16/9', '4/3', '1/1'];
    
    for (const ratio of ratios) {
      await page.locator('#container').evaluate((r) => {
        document.querySelector('#container')!.innerHTML = `<sq-iframe src="https://example.com" aspect-ratio="${r}"></sq-iframe>`;
      }, ratio);
      await page.waitForTimeout(100);

      const iframe = page.locator('sq-iframe');
      await expect(iframe).toBeVisible();
    }
  });

  test('supports sandbox attribute', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-iframe src="https://example.com" sandbox="allow-scripts"></sq-iframe>';
    });
    await page.waitForTimeout(100);

    const iframe = page.locator('sq-iframe');
    await expect(iframe).toBeVisible();
  });
});

// sq-album-cover tests
test.describe('sq-album-cover', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/media/sq-album-cover.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders album cover', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-album-cover src="/album.jpg" alt="Album"></sq-album-cover>';
    });
    await page.waitForTimeout(100);

    const cover = page.locator('sq-album-cover');
    await expect(cover).toBeVisible();
  });

  test('supports different sizes', async ({ page }) => {
    const sizes = ['sm', 'md', 'lg', 'xl'];
    
    for (const size of sizes) {
      await page.locator('#container').evaluate((s) => {
        document.querySelector('#container')!.innerHTML = `<sq-album-cover size="${s}"></sq-album-cover>`;
      }, size);
      await page.waitForTimeout(100);

      const cover = page.locator('sq-album-cover');
      await expect(cover).toBeVisible();
    }
  });

  test('supports different shapes', async ({ page }) => {
    const shapes = ['square', 'rounded', 'circle'];
    
    for (const shape of shapes) {
      await page.locator('#container').evaluate((s) => {
        document.querySelector('#container')!.innerHTML = `<sq-album-cover shape="${s}"></sq-album-cover>`;
      }, shape);
      await page.waitForTimeout(100);

      const cover = page.locator('sq-album-cover');
      await expect(cover).toBeVisible();
    }
  });

  test('shows play overlay on hover', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-album-cover show-play-overlay></sq-album-cover>';
    });
    await page.waitForTimeout(100);

    const cover = page.locator('sq-album-cover');
    await expect(cover).toBeVisible();
  });

  test('shows now-playing indicator', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-album-cover now-playing></sq-album-cover>';
    });
    await page.waitForTimeout(100);

    const cover = page.locator('sq-album-cover');
    await expect(cover).toBeVisible();
  });
});

// sq-song-row tests
test.describe('sq-song-row', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/media/sq-song-row.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders song row', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-song-row title="Song Title" artist="Artist Name" duration="3:45"></sq-song-row>';
    });
    await page.waitForTimeout(100);

    const row = page.locator('sq-song-row');
    await expect(row).toBeVisible();
  });

  test('shows playing state', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-song-row title="Playing Song" playing></sq-song-row>';
    });
    await page.waitForTimeout(100);

    const row = page.locator('sq-song-row');
    await expect(row).toBeVisible();
  });

  test('shows liked state', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-song-row title="Liked Song" liked></sq-song-row>';
    });
    await page.waitForTimeout(100);

    const row = page.locator('sq-song-row');
    await expect(row).toBeVisible();
  });

  test('shows album column when enabled', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-song-row title="Song" album="Album Name" show-album></sq-song-row>';
    });
    await page.waitForTimeout(100);

    const row = page.locator('sq-song-row');
    await expect(row).toBeVisible();
  });
});

// sq-equalizer tests
test.describe('sq-equalizer', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <link rel="stylesheet" href="/src/tokens/tokens.css">
      <script type="module">
        import '/src/components/media/sq-equalizer.js';
      </script>
      <div id="container"></div>
    `);
    await page.waitForTimeout(500);
  });

  test('renders equalizer', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-equalizer></sq-equalizer>';
    });
    await page.waitForTimeout(100);

    const eq = page.locator('sq-equalizer');
    await expect(eq).toBeVisible();
  });

  test('supports custom bar count', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-equalizer bars="12"></sq-equalizer>';
    });
    await page.waitForTimeout(100);

    const eq = page.locator('sq-equalizer');
    await expect(eq).toBeVisible();
  });

  test('supports different variants', async ({ page }) => {
    const variants = ['default', 'success', 'warning', 'danger', 'info'];
    
    for (const variant of variants) {
      await page.locator('#container').evaluate((v) => {
        document.querySelector('#container')!.innerHTML = `<sq-equalizer variant="${v}"></sq-equalizer>`;
      }, variant);
      await page.waitForTimeout(100);

      const eq = page.locator('sq-equalizer');
      await expect(eq).toBeVisible();
    }
  });

  test('paused state stops animation', async ({ page }) => {
    await page.locator('#container').evaluate(el => {
      el.innerHTML = '<sq-equalizer paused></sq-equalizer>';
    });
    await page.waitForTimeout(100);

    const eq = page.locator('sq-equalizer');
    await expect(eq).toBeVisible();
  });
});
