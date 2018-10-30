Ext.data.JsonP.Ext_browser({"tagname":"class","name":"Ext.browser","autodetected":{},"files":[{"filename":"Browser.js","href":"Browser.html#Ext-browser"}],"extends":"Ext.env.Browser","singleton":true,"members":[{"name":"engineName","tagname":"property","owner":"Ext.env.Browser","id":"property-engineName","meta":{"readonly":true}},{"name":"engineVersion","tagname":"property","owner":"Ext.env.Browser","id":"property-engineVersion","meta":{"readonly":true}},{"name":"isSecure","tagname":"property","owner":"Ext.env.Browser","id":"property-isSecure","meta":{}},{"name":"isStrict","tagname":"property","owner":"Ext.env.Browser","id":"property-isStrict","meta":{}},{"name":"name","tagname":"property","owner":"Ext.env.Browser","id":"property-name","meta":{"readonly":true}},{"name":"userAgent","tagname":"property","owner":"Ext.env.Browser","id":"property-userAgent","meta":{}},{"name":"version","tagname":"property","owner":"Ext.env.Browser","id":"property-version","meta":{"readonly":true}},{"name":"is","tagname":"method","owner":"Ext.env.Browser","id":"method-is","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Ext.browser","since":"ExtJs 6.5.2","short_doc":"Provides useful information about the current browser. ...","classIcon":"icon-singleton","superclasses":["Ext.env.Browser"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.env.Browser' rel='Ext.env.Browser' class='docClass'>Ext.env.Browser</a><div class='subclass '><strong>Ext.browser</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Browser.html#Ext-browser' target='_blank'>Browser.js</a></div></pre><div class='doc-contents'><p>Provides useful information about the current browser.</p>\n\n<p>Example:</p>\n\n<pre><code>if (Ext.browser.is.IE) {\n    // IE specific code here\n}\n\nif (Ext.browser.is.WebKit) {\n    // WebKit specific code here\n}\n\nconsole.log(\"Version \" + <a href=\"#!/api/Ext.browser-property-version\" rel=\"Ext.browser-property-version\" class=\"docClass\">Ext.browser.version</a>);\n</code></pre>\n\n<p>For a full list of supported values, refer to <a href=\"#!/api/Ext.browser-method-is\" rel=\"Ext.browser-method-is\" class=\"docClass\">is</a> property/method.</p>\n        <p>Available since: <b>ExtJs 6.5.2</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-engineName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.env.Browser' rel='Ext.env.Browser' class='defined-in docClass'>Ext.env.Browser</a><br/><a href='source/Browser.html#Ext-env-Browser-property-engineName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Browser-property-engineName' class='name expandable'>engineName</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The full name of the current browser's engine. ...</div><div class='long'><p>The full name of the current browser's engine.\nPossible values are:</p>\n\n<ul>\n<li>WebKit</li>\n<li>Gecko</li>\n<li>Presto</li>\n<li>Trident</li>\n<li>Other</li>\n</ul>\n\n        <p>Available since: <b>ExtJs 6.5.2</b></p>\n</div></div></div><div id='property-engineVersion' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.env.Browser' rel='Ext.env.Browser' class='defined-in docClass'>Ext.env.Browser</a><br/><a href='source/Browser.html#Ext-env-Browser-property-engineVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Browser-property-engineVersion' class='name expandable'>engineVersion</a> : <a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Refer to <a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a>.</p>\n</div><div class='long'><p>Refer to <a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a>.</p>\n        <p>Available since: <b>ExtJs 6.5.2</b></p>\n</div></div></div><div id='property-isSecure' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.env.Browser' rel='Ext.env.Browser' class='defined-in docClass'>Ext.env.Browser</a><br/><a href='source/Browser.html#Ext-env-Browser-property-isSecure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Browser-property-isSecure' class='name expandable'>isSecure</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p><code>true</code> if page is running over SSL.</p>\n</div><div class='long'><p><code>true</code> if page is running over SSL.</p>\n        <p>Available since: <b>ExtJs 6.5.2</b></p>\n</div></div></div><div id='property-isStrict' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.env.Browser' rel='Ext.env.Browser' class='defined-in docClass'>Ext.env.Browser</a><br/><a href='source/Browser.html#Ext-env-Browser-property-isStrict' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Browser-property-isStrict' class='name expandable'>isStrict</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p><code>true</code> if browser is using strict mode.</p>\n</div><div class='long'><p><code>true</code> if browser is using strict mode.</p>\n        <p>Available since: <b>ExtJs 6.5.2</b></p>\n</div></div></div><div id='property-name' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.env.Browser' rel='Ext.env.Browser' class='defined-in docClass'>Ext.env.Browser</a><br/><a href='source/Browser.html#Ext-env-Browser-property-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Browser-property-name' class='name expandable'>name</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The full name of the current browser. ...</div><div class='long'><p>The full name of the current browser.\nPossible values are:</p>\n\n<ul>\n<li>IE</li>\n<li>Firefox</li>\n<li>Safari</li>\n<li>Chrome</li>\n<li>Opera</li>\n<li>Other</li>\n</ul>\n\n        <p>Available since: <b>ExtJs 6.5.2</b></p>\n</div></div></div><div id='property-userAgent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.env.Browser' rel='Ext.env.Browser' class='defined-in docClass'>Ext.env.Browser</a><br/><a href='source/Browser.html#Ext-env-Browser-property-userAgent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Browser-property-userAgent' class='name expandable'>userAgent</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Browser User Agent string.</p>\n</div><div class='long'><p>Browser User Agent string.</p>\n        <p>Available since: <b>ExtJs 6.5.2</b></p>\n</div></div></div><div id='property-version' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.env.Browser' rel='Ext.env.Browser' class='defined-in docClass'>Ext.env.Browser</a><br/><a href='source/Browser.html#Ext-env-Browser-property-version' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Browser-property-version' class='name expandable'>version</a> : <a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Refer to <a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a>.</p>\n</div><div class='long'><p>Refer to <a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a>.</p>\n        <p>Available since: <b>ExtJs 6.5.2</b></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-is' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.env.Browser' rel='Ext.env.Browser' class='defined-in docClass'>Ext.env.Browser</a><br/><a href='source/Browser.html#Ext-env-Browser-method-is' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.Browser-method-is' class='name expandable'>is</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>A \"hybrid\" property, can be either accessed as a method call, for example:\n\nif (Ext.browser.is('IE')) {\n    // ... ...</div><div class='long'><p>A \"hybrid\" property, can be either accessed as a method call, for example:</p>\n\n<pre><code>if (<a href=\"#!/api/Ext.browser-method-is\" rel=\"Ext.browser-method-is\" class=\"docClass\">Ext.browser.is</a>('IE')) {\n    // ...\n}\n</code></pre>\n\n<p>Or as an object with Boolean properties, for example:</p>\n\n<pre><code>if (Ext.browser.is.IE) {\n    // ...\n}\n</code></pre>\n\n<p>Versions can be conveniently checked as well. For example:</p>\n\n<pre><code>if (Ext.browser.is.IE10) {\n    // Equivalent to (Ext.browser.is.IE &amp;&amp; Ext.browser.version.equals(10))\n}\n</code></pre>\n\n<p><strong>Note:</strong> Only <a href=\"#!/api/Ext.Version-method-getMajor\" rel=\"Ext.Version-method-getMajor\" class=\"docClass\">major component</a>  and <a href=\"#!/api/Ext.Version-method-getShortVersion\" rel=\"Ext.Version-method-getShortVersion\" class=\"docClass\">simplified</a>\nvalue of the version are available via direct property checking.</p>\n\n<p>Supported values are:</p>\n\n<ul>\n<li>IE</li>\n<li>Firefox</li>\n<li>Safari</li>\n<li>Chrome</li>\n<li>Opera</li>\n<li>WebKit</li>\n<li>Gecko</li>\n<li>Presto</li>\n<li>Trident</li>\n<li>WebView</li>\n<li>Other</li>\n</ul>\n\n        <p>Available since: <b>ExtJs 6.5.2</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The OS name to check.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"singleton":true}});