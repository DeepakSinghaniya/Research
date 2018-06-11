import React from 'react';
import {Helmet} from 'react-helmet';


const home = (porps) => {
    return (
        <div>
            <Helmet>
            <title>Home</title>
            </Helmet>
            <h2>Headings</h2>
            <h1>Header one</h1>
            <h2>Header two</h2>
            <h3>Header three</h3>
            <h4>Header four</h4>
            <h5>HEADER FIVE</h5>
            <h6>Header six</h6>
            <h2>Blockquotes</h2>
            <p>Single line blockquote:</p>
            <blockquote>
                <p>Stay hungry. Stay foolish.</p>
            </blockquote>
            <p>Multi line blockquote with a cite reference:</p>
            <blockquote>
                <p>People think focus means saying yes to the thing you&rsquo;ve got to focus on. But that&rsquo;s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I&rsquo;m actually as proud of the things we haven&rsquo;t done as the things I have done. Innovation is saying no to 1,000 things.</p>
            </blockquote>
            <p><cite>Steve Jobs</cite>&nbsp;&ndash; Apple Worldwide Developers&rsquo; Conference, 1997</p>
            <h2>Tables</h2>
            <table>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Salary</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><a href="http://example.org/">John Doe</a></th>
                        <td>$1</td>
                        <td>Because that&rsquo;s all Steve Jobs needed for a salary.</td>
                    </tr>
                    <tr>
                        <th><a href="http://example.org/">Jane Doe</a></th>
                        <td>$100K</td>
                        <td>For all the blogging she does.</td>
                    </tr>
                    <tr>
                        <th><a href="http://example.org/">Fred Bloggs</a></th>
                        <td>$100M</td>
                        <td>Pictures are worth a thousand words, right? So Jane x 1,000.</td>
                    </tr>
                    <tr>
                        <th><a href="http://example.org/">Jane Bloggs</a></th>
                        <td>$100B</td>
                        <td>With hair like that?! Enough said&hellip;</td>
                    </tr>
                </tbody>
            </table>
            <h2>Definition Lists</h2>
            <dl>
                <dt>Definition List Title</dt>
                <dd>Definition list division.</dd>
                <dt>Startup</dt>
                <dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.</dd>
                <dt>#dowork</dt>
                <dd>Coined by Rob Dyrdek and his personal body guard Christopher &ldquo;Big Black&rdquo; Boykins, &ldquo;Do Work&rdquo; works as a self motivator, to motivating your friends.</dd>
                <dt>Do It Live</dt>
                <dd>I&rsquo;ll let Bill O&rsquo;Reilly will&nbsp;<a title="We'll Do It Live" href="https://www.youtube.com/watch?v=O_HyZ5aW76c">explain</a>&nbsp;this one.</dd>
            </dl>
            <h2>Unordered Lists (Nested)</h2>
            <ul>
                <li>List item one
                    <ul>
                        <li>List item one
                            <ul>
                                <li>List item one</li>
                                <li>List item two</li>
                                <li>List item three</li>
                                <li>List item four</li>
                            </ul>
                        </li>
                        <li>List item two</li>
                        <li>List item three</li>
                        <li>List item four</li>
                    </ul>
                </li>
                <li>List item two</li>
                <li>List item three</li>
                <li>List item four</li>
            </ul>
            <h2>Ordered List (Nested)</h2>
            <ol>
                <li>List item one
                        <ol>
                        <li>List item one
                            <ol>
                                <li>List item one</li>
                                <li>List item two</li>
                                <li>List item three</li>
                                <li>List item four</li>
                            </ol>
                        </li>
                        <li>List item two</li>
                        <li>List item three</li>
                        <li>List item four</li>
                    </ol>
                </li>
                <li>List item two</li>
                <li>List item three</li>
                <li>List item four</li>
            </ol>
            <h2>HTML Tags</h2>
            <p>These supported tags come from the WordPress.com code&nbsp;<a title="Code" href="http://en.support.wordpress.com/code/">FAQ</a>.</p>
            <p><strong>Address Tag</strong></p>
            <address>1 Infinite Loop<br />Cupertino, CA 95014<br />United States</address>
            <p><strong>Anchor Tag (aka. Link)</strong></p>
            <p>This is an example of a&nbsp;<a title="Apple" href="http://apple.com/">link</a>.</p>
            <p><strong>Abbreviation Tag</strong></p>
            <p>The abbreviation&nbsp;<abbr title="Seriously">srsly</abbr>&nbsp;stands for &ldquo;seriously&rdquo;.</p>
            <p><strong>Acronym Tag (<em>deprecated in HTML5</em>)</strong></p>
            <p>The acronym&nbsp;<acronym title="For The Win">ftw</acronym>&nbsp;stands for &ldquo;for the win&rdquo;.</p>
            <p><strong>Big Tag&nbsp;(<em>deprecated in HTML5</em>)</strong></p>
            <p>These tests are a&nbsp;<big>big</big>&nbsp;deal, but this tag is no longer supported in HTML5.</p>
            <p><strong>Cite Tag</strong></p>
            <p>&ldquo;Code is poetry.&rdquo; &mdash;<cite>Automattic</cite></p>
            <p><strong>Code Tag</strong></p>
            <p>You will learn later on in these tests that&nbsp;<code>word-wrap: break-word;</code>&nbsp;will be your best friend.</p>
            <p><strong>Delete Tag</strong></p>
            <p>This tag will let you&nbsp;<del>strikeout text</del>, but this tag is no longer supported in HTML5 (use the&nbsp;<code>&lt;strike&gt;</code>&nbsp;instead).</p>
            <p><strong>Emphasize Tag</strong></p>
            <p>The emphasize tag should&nbsp;<em>italicize</em>&nbsp;text.</p>
            <p><strong>Insert Tag</strong></p>
            <p>This tag should denote&nbsp;<ins>inserted</ins>&nbsp;text.</p>
            <p><strong>Keyboard Tag</strong></p>
            <p>This scarcely known tag emulates&nbsp;<kbd>keyboard text</kbd>, which is usually styled like the&nbsp;<code>&lt;code&gt;</code>&nbsp;tag.</p>
            <p><strong>Preformatted Tag</strong></p>
            <p>This tag styles large blocks of code.</p>
            <pre>.post-title {`{
                margin: 0 0 5px;
                font-weight: bold;
                font-size: 38px;
                line-height: 1.2;
                and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
            }`}</pre>
            <p><strong>Quote Tag</strong></p>
            <p><q>Developers, developers, developers&hellip;</q>&nbsp;&ndash;Steve Ballmer</p>
            <p><strong>Strike Tag&nbsp;(<em>deprecated in HTML5</em>)</strong></p>
            <p>This tag shows&nbsp;strike-through text</p>
            <p><strong>Strong Tag</strong></p>
            <p>This tag shows&nbsp;<strong>bold&nbsp;text.</strong></p>
            <p><strong>Subscript Tag</strong></p>
            <p>Getting our science styling on with H<sub>2</sub>O, which should push the &ldquo;2&rdquo; down.</p>
            <p><strong>Superscript Tag</strong></p>
            <p>Still sticking with science and Isaac Newton&rsquo;s E = MC<sup>2</sup>, which should lift the 2 up.</p>
            <p><strong>Teletype Tag&nbsp;(<em>deprecated in HTML5</em>)</strong></p>
            <p>This rarely used tag emulates&nbsp;<tt>teletype text</tt>, which is usually styled like the&nbsp;<code>&lt;code&gt;</code>&nbsp;tag.</p>
            <p><strong>Variable Tag</strong></p>
            <p>This allows you to denote&nbsp;<var>variables</var>.</p>
        </div>
    );
}

export default home;