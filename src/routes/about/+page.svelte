{#snippet link(href, content)}
    <a {href} target="_blank" rel="noreferrer">{content}</a>
{/snippet}

<h1>About me</h1>
<main id="main-content">
    <p style="padding-bottom: 1em;">My name is Alfio. Nice to meet you!</p>
    <p>
        I'm studying Computer Science and Pure Mathematics at the
        {@render link("https://st-andrews.ac.uk", "University of St Andrews")}
        in Scotland. I'm interning as a software engineer at
        {@render link("https://stripe.com", "Stripe")}
        in Dublin over the summer. I also program in my free time, sometimes resulting
        in the projects on this website.
    </p>

    <p>A few things I find interesting:</p>
    <ul>
        <li>
            <b>The web and its technologies:</b> The web is incredible, and programming
            with web technologies has been my favourite part of the hobby since I
            started. Making good web apps is hard and subject to a fairly unique
            set of constraints. This has resulted in tons of captivating conversations,
            philosophies and developments.
        </li>
        <li>
            <b>Programming languages and compilers:</b>
            I have a lot of fun exploring code optimization and rewriting, and the
            implications of design decisions in different programming languages;
            I also love writing my own parsers and compilers.
        </li>
        <li>
            <b>Cars and Racing:</b> I've been an avid automotive enthusiast my whole
            life. I especially like small cars, weird cars and weird small cars.
            I also enjoy watching endurance racing when I can find the time for it.
        </li>
        <li>
            <b>Music:</b> I really enjoy listening to and analyzing music. My favourite
            genres are ambient, jazz and experimental.
        </li>
        <li>
            <b>Urbanism and City Design:</b> While I am by no means an expert, I
            like exploring the nuances of the intent and quirks in city design (particularly
            zoning, aesthetics and road/transit networks).
        </li>
    </ul>

    <p>
        You can find me on
        {@render link("/github", "GitHub")}
        or reach out via
        {@render link("mailto:tomarchioalfio5@gmail.com", "e-mail")}. (I love
        making new friends!)
    </p>
    <p>Thanks for visiting!</p>
</main>

<style>
    ul {
        padding-left: 1em;
    }
    li {
        margin-bottom: 0.5em;
    }

    /* button {
        color: #333;
        margin: 0;
        padding: 0;
        border: none;
        font-size: 1em;
        font-family: Helvetica;
        background: none;
        cursor: help;
    } */
</style>
