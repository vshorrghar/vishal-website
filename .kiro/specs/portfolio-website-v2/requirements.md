# Requirements Document

## Introduction

A personal portfolio and services website for Vishal Shorghar — a Senior Cloud Solutions Architect, AWS SA, and builder based in Copenhagen, Denmark. Vishal is a practitioner with 18+ years of experience spanning Linux, Kubernetes, OpenShift, data centers, high-performance networking, cloud architecture, and GenAI. He builds GenAI applications for himself and customers, helps Nordic enterprises adopt GenAI, and is a frequent public speaker at conferences like KubeCon, KCD, and RedHat Summit. The website is a static front-end application (HTML/CSS/JS) with a futuristic visual design featuring particle effects, glassmorphism, neon accents, and animated elements. It is deployable to S3 + CloudFront with a TinyURL-style short link (no custom domain). A personal disclaimer is displayed: "Personal platform. All views are my own as an individual practitioner — not representative of any employer."

## Glossary

- **Website**: The static HTML/CSS/JavaScript portfolio website for Vishal Shorghar
- **Hero_Section**: The top-most landing section of the Website containing a typing animation, stats row, and scrolling ticker banner
- **About_Section**: The section displaying Vishal's professional bio, career identity, and info cards
- **Expertise_Section**: The section showcasing technical skills and competencies across cloud, infrastructure, GenAI, and networking domains
- **Experience_Section**: The section displaying a professional career timeline from IIHT (2007) through AWS
- **Projects_Section**: The section between Experience and Services that showcases TokenIQ, Portfolio Doctor, and future projects
- **Services_Section**: The section listing professional service offerings
- **Certifications_Section**: The section displaying professional certifications with the newest highlighted
- **Speaking_Section**: The section showcasing public speaking engagements with placeholder images
- **Booking_Section**: The section where visitors can book consultation sessions with Vishal across three session types
- **Contact_Section**: The section containing a contact form for general inquiries
- **Navigation_Bar**: The fixed/sticky navigation component with links to all major sections
- **Typing_Animation**: A JavaScript-driven animation that cycles through professional role titles in the Hero_Section
- **Stats_Row**: A horizontal row of key achievement metrics displayed in the Hero_Section
- **Ticker_Banner**: A continuously scrolling marquee element below the Stats_Row
- **Terminal_Mockup**: A CSS-styled terminal interface simulating real-time data for the TokenIQ project card
- **Status_Badge**: A pulsing indicator showing project development status (e.g., amber for PoC, blue for In Development)
- **Tech_Stack_Pills**: Glowing tag elements displaying technology names on project cards
- **Timeline_Progress_Indicator**: A visual indicator showing project stages: Idea → PoC → Building → Live
- **Particle_Background**: An animated canvas-based particle effect rendered behind the Hero_Section for a futuristic aesthetic
- **Glassmorphism_Card**: A card component styled with frosted glass effect (backdrop blur, semi-transparent background, subtle border)
- **Neon_Accent**: A glowing color effect applied to borders, text, or icons using CSS box-shadow and text-shadow with cyan, purple, and emerald hues
- **Custom_Cursor**: A custom-styled mouse cursor element that replaces the default browser cursor with a futuristic design
- **Booking_Form**: A form within the Booking_Section for visitors to request a consultation session
- **Disclaimer_Banner**: A visible text element displaying the personal disclaimer on the Website
- **Intersection_Observer**: A browser API used to trigger scroll-based animations when elements enter the viewport

## Requirements

### Requirement 1: Site Structure and Navigation

**User Story:** As a visitor, I want a clear navigation bar linking to all sections, so that I can quickly find information about Vishal's profile.

#### Acceptance Criteria

1. THE Website SHALL render a Navigation_Bar with links to the following sections in order: Home, About, Expertise, Experience, Projects, Services, Speaking, Book My Time, Contact
2. WHEN a visitor clicks a Navigation_Bar link, THE Website SHALL smooth-scroll to the corresponding section
3. THE Navigation_Bar SHALL remain visible at the top of the viewport during scrolling
4. WHEN the viewport width is less than 768 pixels, THE Navigation_Bar SHALL collapse into a hamburger menu icon
5. WHEN a visitor clicks the hamburger menu icon, THE Navigation_Bar SHALL expand to show all navigation links in a vertical layout

### Requirement 2: Hero Section

**User Story:** As a visitor, I want to see an engaging hero section with animated role titles and key stats, so that I immediately understand Vishal's professional identity as a builder and practitioner.

#### Acceptance Criteria

1. THE Hero_Section SHALL display Vishal Shorghar's name as the primary heading
2. THE Typing_Animation SHALL cycle through professional role titles including "Senior Cloud Solutions Architect", "GenAI Builder", "Kubernetes Practitioner", "Cloud-Native Enthusiast", and "Nordic Tech Speaker"
3. THE Stats_Row SHALL display the following metrics: "$10M+ Revenue Influenced", "18+ Years Experience", "4x AWS Certified", "40M+ Users Served", "15+ Workshops Delivered"
4. THE Ticker_Banner SHALL continuously scroll horizontally below the Stats_Row displaying keywords including AWS, Kubernetes, GenAI, Linux, OpenShift, Cloud Architecture, FinOps, RDMA, InfiniBand, Nordic Customers
5. WHEN the Hero_Section loads, THE Typing_Animation SHALL begin cycling through role titles automatically
6. THE Hero_Section SHALL render a Particle_Background behind the content layer

### Requirement 3: About Section

**User Story:** As a visitor, I want to read about Vishal's background, identity, and passions, so that I understand who he is as a builder and practitioner.

#### Acceptance Criteria

1. THE About_Section SHALL display a professional bio paragraph describing Vishal as a builder and practitioner with passions spanning Linux, Kubernetes, OpenShift, data centers, cloud architecture, and GenAI
2. THE About_Section SHALL describe Vishal's work building GenAI applications for himself and customers, and helping Nordic enterprises adopt GenAI
3. THE About_Section SHALL display a profile photo placeholder image at the path "assets/images/profile-photo.jpg" that the site owner can replace with a real photo
4. THE About_Section SHALL display info cards including current focus areas, location (Copenhagen, Denmark), and languages (English, Hindi Native, Danish Basic)
5. THE About_Section SHALL display education information: B.E. Computer Science, University of Rajasthan
6. THE About_Section SHALL render cards using the Glassmorphism_Card style

### Requirement 4: Expertise Section

**User Story:** As a visitor, I want to see Vishal's technical skills and competencies across all his domains, so that I can evaluate his expertise areas.

#### Acceptance Criteria

1. THE Expertise_Section SHALL display categorized technical skills and competencies
2. THE Expertise_Section SHALL include categories for: Cloud Architecture, GenAI/AI/ML, Kubernetes and Containers, FinOps, Security and Compliance, and High-Performance Networking (RDMA, RoCE, InfiniBand)
3. WHEN the Expertise_Section scrolls into the viewport, THE Website SHALL animate the skill elements into view using the Intersection_Observer
4. THE Expertise_Section SHALL render skill category cards using the Glassmorphism_Card style with Neon_Accent borders

### Requirement 5: Experience Section

**User Story:** As a visitor, I want to see Vishal's full professional career timeline, so that I can understand his career progression from infrastructure roots to cloud and GenAI.

#### Acceptance Criteria

1. THE Experience_Section SHALL display professional roles in a vertical timeline layout
2. THE Experience_Section SHALL include the following career entries in reverse chronological order: AWS Solutions Architect, AWS Technical Account Manager, Nets A/S (MitID/NemLogin platform supporting 5M+ Danish citizens with 99.99% uptime), Pure Storage, Radisys/JIO (serving 40M+ subscribers), Cisco, Chelsio Communications, IIHT (trainer, 2007)
3. Each timeline entry SHALL include the job title, company name, date range, key metrics where applicable, and a brief description
4. WHEN the Experience_Section scrolls into the viewport, THE Website SHALL animate timeline entries sequentially using the Intersection_Observer

### Requirement 6: Projects and Innovations Section

**User Story:** As a visitor, I want to see Vishal's AI projects with rich visual detail, so that I can understand the scope and status of each project.

#### Acceptance Criteria

1. THE Projects_Section SHALL appear between the Experience_Section and the Services_Section in the page layout
2. THE Projects_Section SHALL display a TokenIQ card as a full-width featured card with an animated gradient border using cyan, purple, and emerald colors
3. THE TokenIQ card SHALL include a Terminal_Mockup styled with a monospace font and a glowing terminal aesthetic
4. WHEN the TokenIQ card is visible, THE Terminal_Mockup SHALL cycle through simulated real-time financial data entries every 3 seconds
5. THE TokenIQ card SHALL display a features grid, Tech_Stack_Pills, and a static LinkedIn quote component
6. THE Projects_Section SHALL display a Portfolio Doctor card as a medium-sized card with a clean AI analysis interface mockup
7. THE Portfolio Doctor card SHALL display a Status_Badge with a pulsing blue indicator labeled "In Development"
8. THE TokenIQ card SHALL display a Status_Badge with a pulsing amber indicator labeled "PoC"
9. THE Projects_Section SHALL display a "More Coming Soon" teaser card after the Portfolio Doctor card
10. Each project card SHALL display a Timeline_Progress_Indicator showing stages: Idea, PoC, Building, Live, with the current stage highlighted
11. THE Projects_Section SHALL display a "Follow my build journey on LinkedIn" banner linking to https://www.linkedin.com/in/vishal-s-a4b3571b7/

### Requirement 7: Services Section

**User Story:** As a potential client, I want to see the services Vishal offers, so that I can determine if his expertise matches my needs.

#### Acceptance Criteria

1. THE Services_Section SHALL display service offering cards including Cloud Architecture, GenAI Adoption and Application Development, Kubernetes and Container Strategy, and FinOps Advisory
2. Each service card SHALL display a title, description, and relevant icon or visual indicator
3. THE Services_Section SHALL render service cards using the Glassmorphism_Card style
4. WHEN a service card scrolls into the viewport, THE Website SHALL animate the card into view using the Intersection_Observer

### Requirement 8: Certifications Section

**User Story:** As a visitor, I want to see Vishal's professional certifications, so that I can verify his qualifications.

#### Acceptance Criteria

1. THE Certifications_Section SHALL display the following certifications in this order: AWS Certified GenAI Developer - Professional (2025), AWS Certified GenAI Practitioner (Early Adopter), AWS Certified Solutions Architect - Professional (2024), AWS Certified Solutions Architect - Associate (2023), Certified Kubernetes Administrator (CKA), Azure Solutions Architect (AZ-303, AZ-304), Red Hat Certified Engineer (RHCE)
2. THE Certifications_Section SHALL visually highlight the AWS Certified GenAI Developer - Professional (2025) certification as the newest entry using a Neon_Accent glow
3. THE Certifications_Section SHALL display a badge indicating "4x AWS Certified"
4. WHEN the Certifications_Section scrolls into the viewport, THE Website SHALL animate the certification cards into view using the Intersection_Observer

### Requirement 9: Speaking Section

**User Story:** As an event organizer, I want to see Vishal's public speaking experience, so that I can evaluate him as a potential speaker.

#### Acceptance Criteria

1. THE Speaking_Section SHALL display public speaking engagement entries with placeholder images at paths like "assets/images/speaking-1.jpg", "assets/images/speaking-2.jpg" that the site owner can replace
2. Each speaking entry SHALL include the event name, topic, and an associated image
3. THE Speaking_Section SHALL include entries for events such as KubeCon, KCD, RedHat Summit, Open Source Days, and customer workshops across Nordic cities
4. THE Speaking_Section SHALL display a metric: "15+ workshops delivered across Nordic cities" and "500+ conference audience reached"
5. WHEN the Speaking_Section scrolls into the viewport, THE Website SHALL animate the speaking entries into view using the Intersection_Observer

### Requirement 10: Book My Time Section

**User Story:** As a visitor, I want to book a consultation session with Vishal, so that I can get expert guidance on cloud architecture, GenAI adoption, or transformation strategy.

#### Acceptance Criteria

1. THE Booking_Section SHALL display three session type cards: "30-min Quick Connect" for specific questions and sanity checks, "60-min Architecture Deep Dive" for working through architecture challenges, and "90-min Strategic Advisory" for broader transformation strategy
2. THE Booking_Section SHALL display a Booking_Form with the following fields: name, email, company, role, session type (dropdown matching the three session types), topic, message, and timezone
3. WHEN a visitor submits the Booking_Form with all required fields filled, THE Website SHALL display a simulated success confirmation message
4. IF a visitor submits the Booking_Form with any required field empty, THEN THE Website SHALL display a validation message indicating the missing fields
5. THE Booking_Section SHALL display the Disclaimer_Banner text: "Personal platform. All views are my own as an individual practitioner — not representative of any employer."
6. THE Booking_Section SHALL render session type cards using the Glassmorphism_Card style

### Requirement 11: Contact Section

**User Story:** As a visitor, I want to send a general message to Vishal directly from the website, so that I can inquire about collaboration or other topics.

#### Acceptance Criteria

1. THE Contact_Section SHALL display a contact form with fields for name, email address, subject, and message body
2. WHEN a visitor submits the contact form with all fields filled, THE Website SHALL display a simulated success confirmation message
3. IF a visitor submits the contact form with any required field empty, THEN THE Contact_Section SHALL display a validation message indicating the missing fields
4. THE Contact_Section SHALL include a note indicating that Formspree or AWS API Gateway + Lambda + SES can be integrated as a backend in the future
5. THE Contact_Section SHALL display the Disclaimer_Banner text: "Personal platform. All views are my own as an individual practitioner — not representative of any employer."

### Requirement 12: Futuristic Visual Theme and Styling

**User Story:** As a visitor, I want a futuristic, visually striking dark-themed website with modern effects, so that the site reflects the identity of a GenAI specialist and builder.

#### Acceptance Criteria

1. THE Website SHALL use a dark color theme as the base with Neon_Accent gradients using cyan, purple, and emerald colors
2. THE Website SHALL render a Particle_Background on the Hero_Section using a canvas-based particle animation
3. THE Website SHALL apply Glassmorphism_Card styling (backdrop blur, semi-transparent background, subtle border) to all major content cards
4. THE Website SHALL render a Custom_Cursor that replaces the default browser cursor with a futuristic glowing dot or crosshair design
5. THE Website SHALL apply animated gradient borders on featured project cards
6. THE Tech_Stack_Pills SHALL render as glowing tag elements with Neon_Accent styling on project cards
7. THE Website SHALL use CSS animations for the Terminal_Mockup glow effect, Status_Badge pulsing, and Ticker_Banner scrolling
8. THE Website SHALL apply smooth hover animations with scale and glow effects on interactive elements including cards, buttons, and navigation links
9. THE Website SHALL be fully responsive across desktop (1200px+), tablet (768px–1199px), and mobile (below 768px) viewport widths

### Requirement 13: SEO and Meta Tags

**User Story:** As the site owner, I want proper SEO meta tags, so that the website ranks well in search engines.

#### Acceptance Criteria

1. THE Website SHALL set the HTML title to "Vishal Shorghar | 4x AWS Certified | Cloud Architect | GenAI Builder"
2. THE Website SHALL include a meta description tag with content: "4x AWS Certified Cloud Solutions Architect and GenAI builder with 18+ years experience. Kubernetes practitioner, cloud-native enthusiast, and Nordic tech speaker. Building AI applications and helping enterprises adopt GenAI. Based in Copenhagen, Denmark."
3. THE Website SHALL include a meta keywords tag with: Cloud Architecture, GenAI, Kubernetes, AWS, Linux, OpenShift, FinOps, RDMA, InfiniBand, AI applications, Nordic, Copenhagen
4. THE Website SHALL include Open Graph meta tags for title, description, and image for social media sharing

### Requirement 14: Personal Disclaimer

**User Story:** As the site owner, I want a clear personal disclaimer visible on the website, so that visitors understand this is a personal platform and views expressed are not representative of any employer.

#### Acceptance Criteria

1. THE Website SHALL display the Disclaimer_Banner with the text: "Personal platform. All views are my own as an individual practitioner — not representative of any employer."
2. THE Disclaimer_Banner SHALL be visible in the website footer area
3. THE Disclaimer_Banner SHALL also appear in the Booking_Section and Contact_Section

### Requirement 15: Performance and Deployment

**User Story:** As the site owner, I want the website to load quickly and be deployable to AWS CloudFront with a short link, so that visitors have a fast experience.

#### Acceptance Criteria

1. THE Website SHALL consist of static HTML, CSS, and JavaScript files with no server-side rendering dependency
2. THE Website SHALL be deployable to an S3 bucket served via CloudFront without modification
3. THE Website SHALL load all CSS and JavaScript assets without external framework dependencies
4. THE Website SHALL be accessible via a TinyURL-style short link pointing to the CloudFront distribution URL
