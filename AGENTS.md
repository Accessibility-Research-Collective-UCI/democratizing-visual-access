# Website requirements

Apply these requirements to every page and future change.

## Accessibility

- Make all content and interactions accessible to screen readers and keyboards. Target WCAG 2.2 AA.
- Use semantic HTML for its intended purpose, including landmarks, headings, lists, links, and buttons. Use divs only for generic layout.
- Give each page a descriptive h1 and a logical heading hierarchy.
- Give every image an alt attribute. Describe informative images. Use empty alt text for decorative images to avoid screen reader noise.
- Give controls accessible names, visible focus indicators, and clear labels. Preserve logical reading and focus order.
- Maintain sufficient text and control contrast. Do not convey information through color alone.
- Test new interactions with a keyboard and screen reader. Report any testing limits instead of claiming full accessibility.

## Design and motion

- Keep the design clean and consistent with the existing Raleway font and color palette.
- Limit animations to those that serve a clear purpose. Avoid decorative motion and autoplay.
- Respect prefers-reduced-motion. Disable nonessential animation and transitions when the user requests reduced motion.

## Mobile

- Build responsive layouts for small screens first, then adapt them for larger screens.
- Keep text readable, controls easy to tap, and content usable without horizontal page scrolling.
- Make images and other media fit their containers. Do not require hover to access content or controls.
- Test changed layouts at narrow mobile and desktop widths, including text zoom and reflow.
