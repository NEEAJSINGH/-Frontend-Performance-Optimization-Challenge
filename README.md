# Week 4 - Frontend Performance Optimization

## Project

FastFront - Performance Optimized Technology Portal

## Objective

This project demonstrates practical frontend performance optimization
techniques. The page was designed to keep the initial render lightweight,
reduce unnecessary work, and improve the loading and interaction experience.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Local optimized image assets

## Main Optimizations

### 1. Image Optimization

Images are local and appropriately sized for their displayed areas.

Below-the-fold images use:

```html
loading="lazy"
decoding="async"
```

The hero image is above the fold and is therefore prioritized instead of
being lazy loaded.

### 2. Explicit Image Dimensions

Width and height attributes are provided to help browsers reserve space
before images finish loading. This can reduce layout shifts.

### 3. Deferred JavaScript

The JavaScript file uses:

```html
<script src="script.js" defer></script>
```

This prevents the script from blocking HTML parsing.

### 4. Low DOM Complexity

The page uses a small number of semantic elements and avoids unnecessary
wrapper elements or large UI libraries.

### 5. Efficient JavaScript

The script only controls the mobile navigation and does not use polling,
large loops, or repeated unnecessary DOM searches.

### 6. Efficient CSS

The project uses a small custom stylesheet instead of importing a large
CSS framework. Components are grouped logically and media queries are
limited to the required responsive behavior.

### 7. Resource Prioritization

The hero image is preloaded because it is a key above-the-fold resource.

## Performance Testing

Use:

- Google PageSpeed Insights
- Chrome Lighthouse
- Chrome DevTools Network panel

Run the test against the deployed project URL or a local development server.

Record:

- Performance score
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Total Blocking Time (TBT)
- Cumulative Layout Shift (CLS)
- Speed Index

Because Lighthouse results vary by device, browser, network, server, and
test run, the report should record the actual score produced during testing
rather than inventing a fixed score.

## Suggested Testing Process

1. Run Lighthouse on the initial/baseline version.
2. Record the results.
3. Identify the biggest resource and rendering bottlenecks.
4. Apply the optimization techniques.
5. Run Lighthouse again using the same test conditions.
6. Compare the metrics.
7. Document the measured changes.

## Project Structure

```text
week4-performance-optimization/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── hero.jpg
    ├── article-1.jpg
    ├── article-2.jpg
    └── article-3.jpg
```

## Note on Before/After Measurements

The project includes the optimized implementation and a report template for
recording real Lighthouse/PageSpeed measurements. Performance scores should
always be taken from the actual test environment; they are not hard-coded
into this project.
