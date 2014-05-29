




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>ng-flow/dist/ng-flow-standalone.js at master · flowjs/ng-flow · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="flowjs/ng-flow" name="twitter:title" /><meta content="ng-flow - Flow.js html5 file upload extension on angular.js framework" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/5405302?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/5405302?s=400" property="og:image" /><meta content="flowjs/ng-flow" property="og:title" /><meta content="https://github.com/flowjs/ng-flow" property="og:url" /><meta content="ng-flow - Flow.js html5 file upload extension on angular.js framework" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="CFD2C870:7CF4:6BAC3DD:5386A4D1" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="aMaqfOqxEt1zfw0A+gi45zzmVmA3qtr6to2Rd/HGaNhz3JCB7SD9Nr2OU0RALB+0CKRsihNxYkZ6+nA2+WUyZQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-382e2d2394fe36287509f9d88e1aae81a78b71b2.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-98a484013beb7ad6fec06701be309cd2e6d589c7.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="87dcd822bb3f2d8b6bd4940e308f491f">

      
  <meta name="description" content="ng-flow - Flow.js html5 file upload extension on angular.js framework" />

  <meta content="5405302" name="octolytics-dimension-user_id" /><meta content="flowjs" name="octolytics-dimension-user_login" /><meta content="11759116" name="octolytics-dimension-repository_id" /><meta content="flowjs/ng-flow" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="11759116" name="octolytics-dimension-repository_network_root_id" /><meta content="flowjs/ng-flow" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/flowjs/ng-flow/commits/master.atom" rel="alternate" title="Recent Commits to ng-flow:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production  vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fflowjs%2Fng-flow%2Fblob%2Fmaster%2Fdist%2Fng-flow-standalone.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="flowjs/ng-flow"
      data-branch="master"
      data-sha="be6e00f2b030676b61f7c757a4cc33e88ce4669b"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="flowjs/ng-flow" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fflowjs%2Fng-flow"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/flowjs/ng-flow/stargazers">
      261
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fflowjs%2Fng-flow"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>Fork
      </a>
      <a href="/flowjs/ng-flow/network" class="social-count">
        30
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/flowjs" class="url fn" itemprop="url" rel="author"><span itemprop="title">flowjs</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/flowjs/ng-flow" class="js-current-repository js-repo-home-link">ng-flow</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/flowjs/ng-flow" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /flowjs/ng-flow">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/flowjs/ng-flow/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /flowjs/ng-flow/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>4</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/flowjs/ng-flow/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /flowjs/ng-flow/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/flowjs/ng-flow/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /flowjs/ng-flow/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/flowjs/ng-flow/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /flowjs/ng-flow/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/flowjs/ng-flow/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /flowjs/ng-flow/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/flowjs/ng-flow.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/flowjs/ng-flow.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/flowjs/ng-flow" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/flowjs/ng-flow" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/flowjs/ng-flow/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download flowjs/ng-flow as a zip file"
                   title="Download flowjs/ng-flow as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/flowjs/ng-flow/blob/1f69808f2f3d7c274f4490690aa38cd97453ef41/dist/ng-flow-standalone.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:1cf01ff8cb6a3f94e622e53180176b02 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/flowjs/ng-flow/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/blob/develop/dist/ng-flow-standalone.js"
                 data-name="develop"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="develop">develop</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/blob/gh-pages/dist/ng-flow-standalone.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/blob/master/dist/ng-flow-standalone.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v2.4.0/dist/ng-flow-standalone.js"
                 data-name="v2.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.4.0">v2.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v2.3.2/dist/ng-flow-standalone.js"
                 data-name="v2.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3.2">v2.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v2.3.1/dist/ng-flow-standalone.js"
                 data-name="v2.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3.1">v2.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v2.3.0/dist/ng-flow-standalone.js"
                 data-name="v2.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.3.0">v2.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v2.2.0/dist/ng-flow-standalone.js"
                 data-name="v2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.2.0">v2.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v2.1.4/dist/ng-flow-standalone.js"
                 data-name="v2.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.4">v2.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v2.1.3/dist/ng-flow-standalone.js"
                 data-name="v2.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.3">v2.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v2.1.2/dist/ng-flow-standalone.js"
                 data-name="v2.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.2">v2.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v2.1.1/dist/ng-flow-standalone.js"
                 data-name="v2.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.1">v2.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v2.1.0/dist/ng-flow-standalone.js"
                 data-name="v2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.1.0">v2.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v2.0.0/dist/ng-flow-standalone.js"
                 data-name="v2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v2.0.0">v2.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v1.0.0-beta3/dist/ng-flow-standalone.js"
                 data-name="v1.0.0-beta3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0-beta3">v1.0.0-beta3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v1.0.0-beta2/dist/ng-flow-standalone.js"
                 data-name="v1.0.0-beta2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0-beta2">v1.0.0-beta2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v1.0.0-beta/dist/ng-flow-standalone.js"
                 data-name="v1.0.0-beta"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0-beta">v1.0.0-beta</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v1.0.0/dist/ng-flow-standalone.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flowjs/ng-flow/tree/v0.1.0/dist/ng-flow-standalone.js"
                 data-name="v0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.0">v0.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/flowjs/ng-flow" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">ng-flow</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/flowjs/ng-flow/tree/master/dist" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator"> / </span><strong class="final-path">ng-flow-standalone.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="dist/ng-flow-standalone.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Aidas Klimas" class="main-avatar js-avatar" data-user="2088484" height="24" src="https://avatars2.githubusercontent.com/u/2088484?s=140" width="24" />
      <span class="author"><a href="/AidasK" rel="contributor">AidasK</a></span>
      <time datetime="2014-04-29T10:45:18+03:00" is="relative-time" title-format="%Y-%m-%d %H:%M:%S %z" title="2014-04-29 10:45:18 +0300">April 29, 2014</time>
      <div class="commit-title">
          <a href="/flowjs/ng-flow/commit/1f69808f2f3d7c274f4490690aa38cd97453ef41" class="message" data-pjax="true" title="Release v2.4.0">Release v2.4.0</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong>  contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Aidas Klimas" class=" js-avatar" data-user="2088484" height="24" src="https://avatars2.githubusercontent.com/u/2088484?s=140" width="24" />
            <a href="/AidasK">AidasK</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>1775 lines (1634 sloc)</span>
          <span class="meta-divider"></span>
        <span>49.401 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/flowjs/ng-flow/raw/master/dist/ng-flow-standalone.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/flowjs/ng-flow/blame/master/dist/ng-flow-standalone.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/flowjs/ng-flow/commits/master/dist/ng-flow-standalone.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>
<span id="L1381" rel="#L1381">1381</span>
<span id="L1382" rel="#L1382">1382</span>
<span id="L1383" rel="#L1383">1383</span>
<span id="L1384" rel="#L1384">1384</span>
<span id="L1385" rel="#L1385">1385</span>
<span id="L1386" rel="#L1386">1386</span>
<span id="L1387" rel="#L1387">1387</span>
<span id="L1388" rel="#L1388">1388</span>
<span id="L1389" rel="#L1389">1389</span>
<span id="L1390" rel="#L1390">1390</span>
<span id="L1391" rel="#L1391">1391</span>
<span id="L1392" rel="#L1392">1392</span>
<span id="L1393" rel="#L1393">1393</span>
<span id="L1394" rel="#L1394">1394</span>
<span id="L1395" rel="#L1395">1395</span>
<span id="L1396" rel="#L1396">1396</span>
<span id="L1397" rel="#L1397">1397</span>
<span id="L1398" rel="#L1398">1398</span>
<span id="L1399" rel="#L1399">1399</span>
<span id="L1400" rel="#L1400">1400</span>
<span id="L1401" rel="#L1401">1401</span>
<span id="L1402" rel="#L1402">1402</span>
<span id="L1403" rel="#L1403">1403</span>
<span id="L1404" rel="#L1404">1404</span>
<span id="L1405" rel="#L1405">1405</span>
<span id="L1406" rel="#L1406">1406</span>
<span id="L1407" rel="#L1407">1407</span>
<span id="L1408" rel="#L1408">1408</span>
<span id="L1409" rel="#L1409">1409</span>
<span id="L1410" rel="#L1410">1410</span>
<span id="L1411" rel="#L1411">1411</span>
<span id="L1412" rel="#L1412">1412</span>
<span id="L1413" rel="#L1413">1413</span>
<span id="L1414" rel="#L1414">1414</span>
<span id="L1415" rel="#L1415">1415</span>
<span id="L1416" rel="#L1416">1416</span>
<span id="L1417" rel="#L1417">1417</span>
<span id="L1418" rel="#L1418">1418</span>
<span id="L1419" rel="#L1419">1419</span>
<span id="L1420" rel="#L1420">1420</span>
<span id="L1421" rel="#L1421">1421</span>
<span id="L1422" rel="#L1422">1422</span>
<span id="L1423" rel="#L1423">1423</span>
<span id="L1424" rel="#L1424">1424</span>
<span id="L1425" rel="#L1425">1425</span>
<span id="L1426" rel="#L1426">1426</span>
<span id="L1427" rel="#L1427">1427</span>
<span id="L1428" rel="#L1428">1428</span>
<span id="L1429" rel="#L1429">1429</span>
<span id="L1430" rel="#L1430">1430</span>
<span id="L1431" rel="#L1431">1431</span>
<span id="L1432" rel="#L1432">1432</span>
<span id="L1433" rel="#L1433">1433</span>
<span id="L1434" rel="#L1434">1434</span>
<span id="L1435" rel="#L1435">1435</span>
<span id="L1436" rel="#L1436">1436</span>
<span id="L1437" rel="#L1437">1437</span>
<span id="L1438" rel="#L1438">1438</span>
<span id="L1439" rel="#L1439">1439</span>
<span id="L1440" rel="#L1440">1440</span>
<span id="L1441" rel="#L1441">1441</span>
<span id="L1442" rel="#L1442">1442</span>
<span id="L1443" rel="#L1443">1443</span>
<span id="L1444" rel="#L1444">1444</span>
<span id="L1445" rel="#L1445">1445</span>
<span id="L1446" rel="#L1446">1446</span>
<span id="L1447" rel="#L1447">1447</span>
<span id="L1448" rel="#L1448">1448</span>
<span id="L1449" rel="#L1449">1449</span>
<span id="L1450" rel="#L1450">1450</span>
<span id="L1451" rel="#L1451">1451</span>
<span id="L1452" rel="#L1452">1452</span>
<span id="L1453" rel="#L1453">1453</span>
<span id="L1454" rel="#L1454">1454</span>
<span id="L1455" rel="#L1455">1455</span>
<span id="L1456" rel="#L1456">1456</span>
<span id="L1457" rel="#L1457">1457</span>
<span id="L1458" rel="#L1458">1458</span>
<span id="L1459" rel="#L1459">1459</span>
<span id="L1460" rel="#L1460">1460</span>
<span id="L1461" rel="#L1461">1461</span>
<span id="L1462" rel="#L1462">1462</span>
<span id="L1463" rel="#L1463">1463</span>
<span id="L1464" rel="#L1464">1464</span>
<span id="L1465" rel="#L1465">1465</span>
<span id="L1466" rel="#L1466">1466</span>
<span id="L1467" rel="#L1467">1467</span>
<span id="L1468" rel="#L1468">1468</span>
<span id="L1469" rel="#L1469">1469</span>
<span id="L1470" rel="#L1470">1470</span>
<span id="L1471" rel="#L1471">1471</span>
<span id="L1472" rel="#L1472">1472</span>
<span id="L1473" rel="#L1473">1473</span>
<span id="L1474" rel="#L1474">1474</span>
<span id="L1475" rel="#L1475">1475</span>
<span id="L1476" rel="#L1476">1476</span>
<span id="L1477" rel="#L1477">1477</span>
<span id="L1478" rel="#L1478">1478</span>
<span id="L1479" rel="#L1479">1479</span>
<span id="L1480" rel="#L1480">1480</span>
<span id="L1481" rel="#L1481">1481</span>
<span id="L1482" rel="#L1482">1482</span>
<span id="L1483" rel="#L1483">1483</span>
<span id="L1484" rel="#L1484">1484</span>
<span id="L1485" rel="#L1485">1485</span>
<span id="L1486" rel="#L1486">1486</span>
<span id="L1487" rel="#L1487">1487</span>
<span id="L1488" rel="#L1488">1488</span>
<span id="L1489" rel="#L1489">1489</span>
<span id="L1490" rel="#L1490">1490</span>
<span id="L1491" rel="#L1491">1491</span>
<span id="L1492" rel="#L1492">1492</span>
<span id="L1493" rel="#L1493">1493</span>
<span id="L1494" rel="#L1494">1494</span>
<span id="L1495" rel="#L1495">1495</span>
<span id="L1496" rel="#L1496">1496</span>
<span id="L1497" rel="#L1497">1497</span>
<span id="L1498" rel="#L1498">1498</span>
<span id="L1499" rel="#L1499">1499</span>
<span id="L1500" rel="#L1500">1500</span>
<span id="L1501" rel="#L1501">1501</span>
<span id="L1502" rel="#L1502">1502</span>
<span id="L1503" rel="#L1503">1503</span>
<span id="L1504" rel="#L1504">1504</span>
<span id="L1505" rel="#L1505">1505</span>
<span id="L1506" rel="#L1506">1506</span>
<span id="L1507" rel="#L1507">1507</span>
<span id="L1508" rel="#L1508">1508</span>
<span id="L1509" rel="#L1509">1509</span>
<span id="L1510" rel="#L1510">1510</span>
<span id="L1511" rel="#L1511">1511</span>
<span id="L1512" rel="#L1512">1512</span>
<span id="L1513" rel="#L1513">1513</span>
<span id="L1514" rel="#L1514">1514</span>
<span id="L1515" rel="#L1515">1515</span>
<span id="L1516" rel="#L1516">1516</span>
<span id="L1517" rel="#L1517">1517</span>
<span id="L1518" rel="#L1518">1518</span>
<span id="L1519" rel="#L1519">1519</span>
<span id="L1520" rel="#L1520">1520</span>
<span id="L1521" rel="#L1521">1521</span>
<span id="L1522" rel="#L1522">1522</span>
<span id="L1523" rel="#L1523">1523</span>
<span id="L1524" rel="#L1524">1524</span>
<span id="L1525" rel="#L1525">1525</span>
<span id="L1526" rel="#L1526">1526</span>
<span id="L1527" rel="#L1527">1527</span>
<span id="L1528" rel="#L1528">1528</span>
<span id="L1529" rel="#L1529">1529</span>
<span id="L1530" rel="#L1530">1530</span>
<span id="L1531" rel="#L1531">1531</span>
<span id="L1532" rel="#L1532">1532</span>
<span id="L1533" rel="#L1533">1533</span>
<span id="L1534" rel="#L1534">1534</span>
<span id="L1535" rel="#L1535">1535</span>
<span id="L1536" rel="#L1536">1536</span>
<span id="L1537" rel="#L1537">1537</span>
<span id="L1538" rel="#L1538">1538</span>
<span id="L1539" rel="#L1539">1539</span>
<span id="L1540" rel="#L1540">1540</span>
<span id="L1541" rel="#L1541">1541</span>
<span id="L1542" rel="#L1542">1542</span>
<span id="L1543" rel="#L1543">1543</span>
<span id="L1544" rel="#L1544">1544</span>
<span id="L1545" rel="#L1545">1545</span>
<span id="L1546" rel="#L1546">1546</span>
<span id="L1547" rel="#L1547">1547</span>
<span id="L1548" rel="#L1548">1548</span>
<span id="L1549" rel="#L1549">1549</span>
<span id="L1550" rel="#L1550">1550</span>
<span id="L1551" rel="#L1551">1551</span>
<span id="L1552" rel="#L1552">1552</span>
<span id="L1553" rel="#L1553">1553</span>
<span id="L1554" rel="#L1554">1554</span>
<span id="L1555" rel="#L1555">1555</span>
<span id="L1556" rel="#L1556">1556</span>
<span id="L1557" rel="#L1557">1557</span>
<span id="L1558" rel="#L1558">1558</span>
<span id="L1559" rel="#L1559">1559</span>
<span id="L1560" rel="#L1560">1560</span>
<span id="L1561" rel="#L1561">1561</span>
<span id="L1562" rel="#L1562">1562</span>
<span id="L1563" rel="#L1563">1563</span>
<span id="L1564" rel="#L1564">1564</span>
<span id="L1565" rel="#L1565">1565</span>
<span id="L1566" rel="#L1566">1566</span>
<span id="L1567" rel="#L1567">1567</span>
<span id="L1568" rel="#L1568">1568</span>
<span id="L1569" rel="#L1569">1569</span>
<span id="L1570" rel="#L1570">1570</span>
<span id="L1571" rel="#L1571">1571</span>
<span id="L1572" rel="#L1572">1572</span>
<span id="L1573" rel="#L1573">1573</span>
<span id="L1574" rel="#L1574">1574</span>
<span id="L1575" rel="#L1575">1575</span>
<span id="L1576" rel="#L1576">1576</span>
<span id="L1577" rel="#L1577">1577</span>
<span id="L1578" rel="#L1578">1578</span>
<span id="L1579" rel="#L1579">1579</span>
<span id="L1580" rel="#L1580">1580</span>
<span id="L1581" rel="#L1581">1581</span>
<span id="L1582" rel="#L1582">1582</span>
<span id="L1583" rel="#L1583">1583</span>
<span id="L1584" rel="#L1584">1584</span>
<span id="L1585" rel="#L1585">1585</span>
<span id="L1586" rel="#L1586">1586</span>
<span id="L1587" rel="#L1587">1587</span>
<span id="L1588" rel="#L1588">1588</span>
<span id="L1589" rel="#L1589">1589</span>
<span id="L1590" rel="#L1590">1590</span>
<span id="L1591" rel="#L1591">1591</span>
<span id="L1592" rel="#L1592">1592</span>
<span id="L1593" rel="#L1593">1593</span>
<span id="L1594" rel="#L1594">1594</span>
<span id="L1595" rel="#L1595">1595</span>
<span id="L1596" rel="#L1596">1596</span>
<span id="L1597" rel="#L1597">1597</span>
<span id="L1598" rel="#L1598">1598</span>
<span id="L1599" rel="#L1599">1599</span>
<span id="L1600" rel="#L1600">1600</span>
<span id="L1601" rel="#L1601">1601</span>
<span id="L1602" rel="#L1602">1602</span>
<span id="L1603" rel="#L1603">1603</span>
<span id="L1604" rel="#L1604">1604</span>
<span id="L1605" rel="#L1605">1605</span>
<span id="L1606" rel="#L1606">1606</span>
<span id="L1607" rel="#L1607">1607</span>
<span id="L1608" rel="#L1608">1608</span>
<span id="L1609" rel="#L1609">1609</span>
<span id="L1610" rel="#L1610">1610</span>
<span id="L1611" rel="#L1611">1611</span>
<span id="L1612" rel="#L1612">1612</span>
<span id="L1613" rel="#L1613">1613</span>
<span id="L1614" rel="#L1614">1614</span>
<span id="L1615" rel="#L1615">1615</span>
<span id="L1616" rel="#L1616">1616</span>
<span id="L1617" rel="#L1617">1617</span>
<span id="L1618" rel="#L1618">1618</span>
<span id="L1619" rel="#L1619">1619</span>
<span id="L1620" rel="#L1620">1620</span>
<span id="L1621" rel="#L1621">1621</span>
<span id="L1622" rel="#L1622">1622</span>
<span id="L1623" rel="#L1623">1623</span>
<span id="L1624" rel="#L1624">1624</span>
<span id="L1625" rel="#L1625">1625</span>
<span id="L1626" rel="#L1626">1626</span>
<span id="L1627" rel="#L1627">1627</span>
<span id="L1628" rel="#L1628">1628</span>
<span id="L1629" rel="#L1629">1629</span>
<span id="L1630" rel="#L1630">1630</span>
<span id="L1631" rel="#L1631">1631</span>
<span id="L1632" rel="#L1632">1632</span>
<span id="L1633" rel="#L1633">1633</span>
<span id="L1634" rel="#L1634">1634</span>
<span id="L1635" rel="#L1635">1635</span>
<span id="L1636" rel="#L1636">1636</span>
<span id="L1637" rel="#L1637">1637</span>
<span id="L1638" rel="#L1638">1638</span>
<span id="L1639" rel="#L1639">1639</span>
<span id="L1640" rel="#L1640">1640</span>
<span id="L1641" rel="#L1641">1641</span>
<span id="L1642" rel="#L1642">1642</span>
<span id="L1643" rel="#L1643">1643</span>
<span id="L1644" rel="#L1644">1644</span>
<span id="L1645" rel="#L1645">1645</span>
<span id="L1646" rel="#L1646">1646</span>
<span id="L1647" rel="#L1647">1647</span>
<span id="L1648" rel="#L1648">1648</span>
<span id="L1649" rel="#L1649">1649</span>
<span id="L1650" rel="#L1650">1650</span>
<span id="L1651" rel="#L1651">1651</span>
<span id="L1652" rel="#L1652">1652</span>
<span id="L1653" rel="#L1653">1653</span>
<span id="L1654" rel="#L1654">1654</span>
<span id="L1655" rel="#L1655">1655</span>
<span id="L1656" rel="#L1656">1656</span>
<span id="L1657" rel="#L1657">1657</span>
<span id="L1658" rel="#L1658">1658</span>
<span id="L1659" rel="#L1659">1659</span>
<span id="L1660" rel="#L1660">1660</span>
<span id="L1661" rel="#L1661">1661</span>
<span id="L1662" rel="#L1662">1662</span>
<span id="L1663" rel="#L1663">1663</span>
<span id="L1664" rel="#L1664">1664</span>
<span id="L1665" rel="#L1665">1665</span>
<span id="L1666" rel="#L1666">1666</span>
<span id="L1667" rel="#L1667">1667</span>
<span id="L1668" rel="#L1668">1668</span>
<span id="L1669" rel="#L1669">1669</span>
<span id="L1670" rel="#L1670">1670</span>
<span id="L1671" rel="#L1671">1671</span>
<span id="L1672" rel="#L1672">1672</span>
<span id="L1673" rel="#L1673">1673</span>
<span id="L1674" rel="#L1674">1674</span>
<span id="L1675" rel="#L1675">1675</span>
<span id="L1676" rel="#L1676">1676</span>
<span id="L1677" rel="#L1677">1677</span>
<span id="L1678" rel="#L1678">1678</span>
<span id="L1679" rel="#L1679">1679</span>
<span id="L1680" rel="#L1680">1680</span>
<span id="L1681" rel="#L1681">1681</span>
<span id="L1682" rel="#L1682">1682</span>
<span id="L1683" rel="#L1683">1683</span>
<span id="L1684" rel="#L1684">1684</span>
<span id="L1685" rel="#L1685">1685</span>
<span id="L1686" rel="#L1686">1686</span>
<span id="L1687" rel="#L1687">1687</span>
<span id="L1688" rel="#L1688">1688</span>
<span id="L1689" rel="#L1689">1689</span>
<span id="L1690" rel="#L1690">1690</span>
<span id="L1691" rel="#L1691">1691</span>
<span id="L1692" rel="#L1692">1692</span>
<span id="L1693" rel="#L1693">1693</span>
<span id="L1694" rel="#L1694">1694</span>
<span id="L1695" rel="#L1695">1695</span>
<span id="L1696" rel="#L1696">1696</span>
<span id="L1697" rel="#L1697">1697</span>
<span id="L1698" rel="#L1698">1698</span>
<span id="L1699" rel="#L1699">1699</span>
<span id="L1700" rel="#L1700">1700</span>
<span id="L1701" rel="#L1701">1701</span>
<span id="L1702" rel="#L1702">1702</span>
<span id="L1703" rel="#L1703">1703</span>
<span id="L1704" rel="#L1704">1704</span>
<span id="L1705" rel="#L1705">1705</span>
<span id="L1706" rel="#L1706">1706</span>
<span id="L1707" rel="#L1707">1707</span>
<span id="L1708" rel="#L1708">1708</span>
<span id="L1709" rel="#L1709">1709</span>
<span id="L1710" rel="#L1710">1710</span>
<span id="L1711" rel="#L1711">1711</span>
<span id="L1712" rel="#L1712">1712</span>
<span id="L1713" rel="#L1713">1713</span>
<span id="L1714" rel="#L1714">1714</span>
<span id="L1715" rel="#L1715">1715</span>
<span id="L1716" rel="#L1716">1716</span>
<span id="L1717" rel="#L1717">1717</span>
<span id="L1718" rel="#L1718">1718</span>
<span id="L1719" rel="#L1719">1719</span>
<span id="L1720" rel="#L1720">1720</span>
<span id="L1721" rel="#L1721">1721</span>
<span id="L1722" rel="#L1722">1722</span>
<span id="L1723" rel="#L1723">1723</span>
<span id="L1724" rel="#L1724">1724</span>
<span id="L1725" rel="#L1725">1725</span>
<span id="L1726" rel="#L1726">1726</span>
<span id="L1727" rel="#L1727">1727</span>
<span id="L1728" rel="#L1728">1728</span>
<span id="L1729" rel="#L1729">1729</span>
<span id="L1730" rel="#L1730">1730</span>
<span id="L1731" rel="#L1731">1731</span>
<span id="L1732" rel="#L1732">1732</span>
<span id="L1733" rel="#L1733">1733</span>
<span id="L1734" rel="#L1734">1734</span>
<span id="L1735" rel="#L1735">1735</span>
<span id="L1736" rel="#L1736">1736</span>
<span id="L1737" rel="#L1737">1737</span>
<span id="L1738" rel="#L1738">1738</span>
<span id="L1739" rel="#L1739">1739</span>
<span id="L1740" rel="#L1740">1740</span>
<span id="L1741" rel="#L1741">1741</span>
<span id="L1742" rel="#L1742">1742</span>
<span id="L1743" rel="#L1743">1743</span>
<span id="L1744" rel="#L1744">1744</span>
<span id="L1745" rel="#L1745">1745</span>
<span id="L1746" rel="#L1746">1746</span>
<span id="L1747" rel="#L1747">1747</span>
<span id="L1748" rel="#L1748">1748</span>
<span id="L1749" rel="#L1749">1749</span>
<span id="L1750" rel="#L1750">1750</span>
<span id="L1751" rel="#L1751">1751</span>
<span id="L1752" rel="#L1752">1752</span>
<span id="L1753" rel="#L1753">1753</span>
<span id="L1754" rel="#L1754">1754</span>
<span id="L1755" rel="#L1755">1755</span>
<span id="L1756" rel="#L1756">1756</span>
<span id="L1757" rel="#L1757">1757</span>
<span id="L1758" rel="#L1758">1758</span>
<span id="L1759" rel="#L1759">1759</span>
<span id="L1760" rel="#L1760">1760</span>
<span id="L1761" rel="#L1761">1761</span>
<span id="L1762" rel="#L1762">1762</span>
<span id="L1763" rel="#L1763">1763</span>
<span id="L1764" rel="#L1764">1764</span>
<span id="L1765" rel="#L1765">1765</span>
<span id="L1766" rel="#L1766">1766</span>
<span id="L1767" rel="#L1767">1767</span>
<span id="L1768" rel="#L1768">1768</span>
<span id="L1769" rel="#L1769">1769</span>
<span id="L1770" rel="#L1770">1770</span>
<span id="L1771" rel="#L1771">1771</span>
<span id="L1772" rel="#L1772">1772</span>
<span id="L1773" rel="#L1773">1773</span>
<span id="L1774" rel="#L1774">1774</span>
<span id="L1775" rel="#L1775">1775</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * @license MIT</span></div><div class='line' id='LC3'><span class="cm"> */</span></div><div class='line' id='LC4'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">document</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span><span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC7'><span class="cm">   * Flow.js is a library providing multiple simultaneous, stable and</span></div><div class='line' id='LC8'><span class="cm">   * resumable uploads via the HTML5 File API.</span></div><div class='line' id='LC9'><span class="cm">   * @param [opts]</span></div><div class='line' id='LC10'><span class="cm">   * @param {number} [opts.chunkSize]</span></div><div class='line' id='LC11'><span class="cm">   * @param {bool} [opts.forceChunkSize]</span></div><div class='line' id='LC12'><span class="cm">   * @param {number} [opts.simultaneousUploads]</span></div><div class='line' id='LC13'><span class="cm">   * @param {bool} [opts.singleFile]</span></div><div class='line' id='LC14'><span class="cm">   * @param {string} [opts.fileParameterName]</span></div><div class='line' id='LC15'><span class="cm">   * @param {number} [opts.progressCallbacksInterval]</span></div><div class='line' id='LC16'><span class="cm">   * @param {number} [opts.speedSmoothingFactor]</span></div><div class='line' id='LC17'><span class="cm">   * @param {Object|Function} [opts.query]</span></div><div class='line' id='LC18'><span class="cm">   * @param {Object} [opts.headers]</span></div><div class='line' id='LC19'><span class="cm">   * @param {bool} [opts.withCredentials]</span></div><div class='line' id='LC20'><span class="cm">   * @param {Function} [opts.preprocess]</span></div><div class='line' id='LC21'><span class="cm">   * @param {string} [opts.method]</span></div><div class='line' id='LC22'><span class="cm">   * @param {bool} [opts.prioritizeFirstAndLastChunk]</span></div><div class='line' id='LC23'><span class="cm">   * @param {string} [opts.target]</span></div><div class='line' id='LC24'><span class="cm">   * @param {number} [opts.maxChunkRetries]</span></div><div class='line' id='LC25'><span class="cm">   * @param {number} [opts.chunkRetryInterval]</span></div><div class='line' id='LC26'><span class="cm">   * @param {Array.&lt;number&gt;} [opts.permanentErrors]</span></div><div class='line' id='LC27'><span class="cm">   * @param {Function} [opts.generateUniqueIdentifier]</span></div><div class='line' id='LC28'><span class="cm">   * @constructor</span></div><div class='line' id='LC29'><span class="cm">   */</span></div><div class='line' id='LC30'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">Flow</span><span class="p">(</span><span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC32'><span class="cm">     * Supported by browser?</span></div><div class='line' id='LC33'><span class="cm">     * @type {boolean}</span></div><div class='line' id='LC34'><span class="cm">     */</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">support</span> <span class="o">=</span> <span class="p">(</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">typeof</span> <span class="nx">File</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">typeof</span> <span class="nx">Blob</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">typeof</span> <span class="nx">FileList</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">!!</span><span class="nx">Blob</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span> <span class="o">||</span> <span class="o">!!</span><span class="nx">Blob</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">webkitSlice</span> <span class="o">||</span> <span class="o">!!</span><span class="nx">Blob</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">mozSlice</span> <span class="o">||</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">false</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">)</span> <span class="c1">// slicing files support</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">support</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">;</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC50'><span class="cm">     * Check if directory upload is supported</span></div><div class='line' id='LC51'><span class="cm">     * @type {boolean}</span></div><div class='line' id='LC52'><span class="cm">     */</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">supportDirectory</span> <span class="o">=</span> <span class="sr">/WebKit/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">);</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC56'><span class="cm">     * List of FlowFile objects</span></div><div class='line' id='LC57'><span class="cm">     * @type {Array.&lt;FlowFile&gt;}</span></div><div class='line' id='LC58'><span class="cm">     */</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">files</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC62'><span class="cm">     * Default options for flow.js</span></div><div class='line' id='LC63'><span class="cm">     * @type {Object}</span></div><div class='line' id='LC64'><span class="cm">     */</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chunkSize</span><span class="o">:</span> <span class="mi">1024</span> <span class="o">*</span> <span class="mi">1024</span><span class="p">,</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">forceChunkSize</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">simultaneousUploads</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">singleFile</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileParameterName</span><span class="o">:</span> <span class="s1">&#39;file&#39;</span><span class="p">,</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">progressCallbacksInterval</span><span class="o">:</span> <span class="mi">500</span><span class="p">,</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">speedSmoothingFactor</span><span class="o">:</span> <span class="mf">0.1</span><span class="p">,</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">query</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">headers</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">withCredentials</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">preprocess</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span><span class="o">:</span> <span class="s1">&#39;multipart&#39;</span><span class="p">,</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">prioritizeFirstAndLastChunk</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">target</span><span class="o">:</span> <span class="s1">&#39;/&#39;</span><span class="p">,</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">testChunks</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">generateUniqueIdentifier</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">maxChunkRetries</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chunkRetryInterval</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">permanentErrors</span><span class="o">:</span> <span class="p">[</span><span class="mi">404</span><span class="p">,</span> <span class="mi">415</span><span class="p">,</span> <span class="mi">500</span><span class="p">,</span> <span class="mi">501</span><span class="p">],</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">onDropStopPropagation</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC89'><span class="cm">     * Current options</span></div><div class='line' id='LC90'><span class="cm">     * @type {Object}</span></div><div class='line' id='LC91'><span class="cm">     */</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">opts</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC95'><span class="cm">     * List of events:</span></div><div class='line' id='LC96'><span class="cm">     *  key stands for event name</span></div><div class='line' id='LC97'><span class="cm">     *  value array list of callbacks</span></div><div class='line' id='LC98'><span class="cm">     * @type {}</span></div><div class='line' id='LC99'><span class="cm">     */</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">events</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC105'><span class="cm">     * On drop event</span></div><div class='line' id='LC106'><span class="cm">     * @function</span></div><div class='line' id='LC107'><span class="cm">     * @param {MouseEvent} event</span></div><div class='line' id='LC108'><span class="cm">     */</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">onDrop</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">onDropStopPropagation</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dataTransfer</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">dataTransfer</span><span class="p">;</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">dataTransfer</span><span class="p">.</span><span class="nx">items</span> <span class="o">&amp;&amp;</span> <span class="nx">dataTransfer</span><span class="p">.</span><span class="nx">items</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dataTransfer</span><span class="p">.</span><span class="nx">items</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">webkitGetAsEntry</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">webkitReadDataTransfer</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">addFiles</span><span class="p">(</span><span class="nx">dataTransfer</span><span class="p">.</span><span class="nx">files</span><span class="p">,</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC124'><span class="cm">     * Prevent default</span></div><div class='line' id='LC125'><span class="cm">     * @function</span></div><div class='line' id='LC126'><span class="cm">     * @param {MouseEvent} event</span></div><div class='line' id='LC127'><span class="cm">     */</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">preventEvent</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC134'><span class="cm">     * Current options</span></div><div class='line' id='LC135'><span class="cm">     * @type {Object}</span></div><div class='line' id='LC136'><span class="cm">     */</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">opts</span> <span class="o">=</span> <span class="nx">Flow</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="k">this</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">opts</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line' id='LC138'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'>&nbsp;&nbsp;<span class="nx">Flow</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC142'><span class="cm">     * Set a callback for an event, possible events:</span></div><div class='line' id='LC143'><span class="cm">     * fileSuccess(file), fileProgress(file), fileAdded(file, event),</span></div><div class='line' id='LC144'><span class="cm">     * fileRetry(file), fileError(file, message), complete(),</span></div><div class='line' id='LC145'><span class="cm">     * progress(), error(message, file), pause()</span></div><div class='line' id='LC146'><span class="cm">     * @function</span></div><div class='line' id='LC147'><span class="cm">     * @param {string} event</span></div><div class='line' id='LC148'><span class="cm">     * @param {Function} callback</span></div><div class='line' id='LC149'><span class="cm">     */</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">on</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">event</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">event</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">event</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC159'><span class="cm">     * Remove event callback</span></div><div class='line' id='LC160'><span class="cm">     * @function</span></div><div class='line' id='LC161'><span class="cm">     * @param {string} [event] removes all events if not specified</span></div><div class='line' id='LC162'><span class="cm">     * @param {Function} [fn] removes all callbacks of event if not specified</span></div><div class='line' id='LC163'><span class="cm">     */</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">off</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">event</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fn</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">event</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">arrayRemove</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">event</span><span class="p">],</span> <span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">event</span><span class="p">];</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">events</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC180'><span class="cm">     * Fire an event</span></div><div class='line' id='LC181'><span class="cm">     * @function</span></div><div class='line' id='LC182'><span class="cm">     * @param {string} event event name</span></div><div class='line' id='LC183'><span class="cm">     * @param {...} args arguments of a callback</span></div><div class='line' id='LC184'><span class="cm">     * @return {bool} value is false if at least one of the event handlers which handled this event</span></div><div class='line' id='LC185'><span class="cm">     * returned false. Otherwise it returns true.</span></div><div class='line' id='LC186'><span class="cm">     */</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fire</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `arguments` is an object, not array, in FF, so:</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">preventDefault</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">event</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">[</span><span class="nx">event</span><span class="p">],</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">preventDefault</span> <span class="o">=</span> <span class="nx">callback</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">||</span> <span class="nx">preventDefault</span><span class="p">;</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">event</span> <span class="o">!=</span> <span class="s1">&#39;catchall&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span><span class="s1">&#39;catchAll&#39;</span><span class="p">);</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">preventDefault</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">fire</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">||</span> <span class="nx">preventDefault</span><span class="p">;</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!</span><span class="nx">preventDefault</span><span class="p">;</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC205'><span class="cm">     * Read webkit dataTransfer object</span></div><div class='line' id='LC206'><span class="cm">     * @param event</span></div><div class='line' id='LC207'><span class="cm">     */</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">webkitReadDataTransfer</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">queue</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">dataTransfer</span><span class="p">.</span><span class="nx">items</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">files</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">dataTransfer</span><span class="p">.</span><span class="nx">items</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">entry</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">webkitGetAsEntry</span><span class="p">();</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">entry</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">decrement</span><span class="p">();</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">;</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">entry</span><span class="p">.</span><span class="nx">isFile</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// due to a bug in Chrome&#39;s File System API impl - #149735</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileReadSuccess</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">getAsFile</span><span class="p">(),</span> <span class="nx">entry</span><span class="p">.</span><span class="nx">fullPath</span><span class="p">);</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">entry</span><span class="p">.</span><span class="nx">createReader</span><span class="p">().</span><span class="nx">readEntries</span><span class="p">(</span><span class="nx">readSuccess</span><span class="p">,</span> <span class="nx">readError</span><span class="p">);</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">readSuccess</span><span class="p">(</span><span class="nx">entries</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">queue</span> <span class="o">+=</span> <span class="nx">entries</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">entries</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">entry</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">entry</span><span class="p">.</span><span class="nx">isFile</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fullPath</span> <span class="o">=</span> <span class="nx">entry</span><span class="p">.</span><span class="nx">fullPath</span><span class="p">;</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">entry</span><span class="p">.</span><span class="nx">file</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileReadSuccess</span><span class="p">(</span><span class="nx">file</span><span class="p">,</span> <span class="nx">fullPath</span><span class="p">);</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">readError</span><span class="p">);</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">entry</span><span class="p">.</span><span class="nx">isDirectory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">entry</span><span class="p">.</span><span class="nx">createReader</span><span class="p">().</span><span class="nx">readEntries</span><span class="p">(</span><span class="nx">readSuccess</span><span class="p">,</span> <span class="nx">readError</span><span class="p">);</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">decrement</span><span class="p">();</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">fileReadSuccess</span><span class="p">(</span><span class="nx">file</span><span class="p">,</span> <span class="nx">fullPath</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// relative path should not start with &quot;/&quot;</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">file</span><span class="p">.</span><span class="nx">relativePath</span> <span class="o">=</span> <span class="nx">fullPath</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">files</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">file</span><span class="p">);</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">decrement</span><span class="p">();</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">readError</span><span class="p">(</span><span class="nx">fileError</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">fileError</span><span class="p">;</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">decrement</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">--</span><span class="nx">queue</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">addFiles</span><span class="p">(</span><span class="nx">files</span><span class="p">,</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC254'><br/></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC256'><span class="cm">     * Generate unique identifier for a file</span></div><div class='line' id='LC257'><span class="cm">     * @function</span></div><div class='line' id='LC258'><span class="cm">     * @param {FlowFile} file</span></div><div class='line' id='LC259'><span class="cm">     * @returns {string}</span></div><div class='line' id='LC260'><span class="cm">     */</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">generateUniqueIdentifier</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">custom</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">generateUniqueIdentifier</span><span class="p">;</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">custom</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">custom</span><span class="p">(</span><span class="nx">file</span><span class="p">);</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Some confusion in different versions of Firefox</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">relativePath</span> <span class="o">=</span> <span class="nx">file</span><span class="p">.</span><span class="nx">relativePath</span> <span class="o">||</span> <span class="nx">file</span><span class="p">.</span><span class="nx">webkitRelativePath</span> <span class="o">||</span> <span class="nx">file</span><span class="p">.</span><span class="nx">fileName</span> <span class="o">||</span> <span class="nx">file</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">file</span><span class="p">.</span><span class="nx">size</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span> <span class="nx">relativePath</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[^0-9a-zA-Z_-]/img</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC270'><br/></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC272'><span class="cm">     * Upload next chunk from the queue</span></div><div class='line' id='LC273'><span class="cm">     * @function</span></div><div class='line' id='LC274'><span class="cm">     * @returns {boolean}</span></div><div class='line' id='LC275'><span class="cm">     * @private</span></div><div class='line' id='LC276'><span class="cm">     */</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">uploadNextChunk</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">preventEvents</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// In some cases (such as videos) it&#39;s really handy to upload the first</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// and last chunk of a file quickly; this let&#39;s the server check the file&#39;s</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// metadata and determine if there&#39;s even a point in continuing.</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">found</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">prioritizeFirstAndLastChunk</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">file</span><span class="p">.</span><span class="nx">paused</span> <span class="o">&amp;&amp;</span> <span class="nx">file</span><span class="p">.</span><span class="nx">chunks</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">file</span><span class="p">.</span><span class="nx">chunks</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">status</span><span class="p">()</span> <span class="o">===</span> <span class="s1">&#39;pending&#39;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">file</span><span class="p">.</span><span class="nx">chunks</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">preprocessState</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">file</span><span class="p">.</span><span class="nx">chunks</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">send</span><span class="p">();</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">found</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">file</span><span class="p">.</span><span class="nx">paused</span> <span class="o">&amp;&amp;</span> <span class="nx">file</span><span class="p">.</span><span class="nx">chunks</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">file</span><span class="p">.</span><span class="nx">chunks</span><span class="p">[</span><span class="nx">file</span><span class="p">.</span><span class="nx">chunks</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">].</span><span class="nx">status</span><span class="p">()</span> <span class="o">===</span> <span class="s1">&#39;pending&#39;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">file</span><span class="p">.</span><span class="nx">chunks</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">preprocessState</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">file</span><span class="p">.</span><span class="nx">chunks</span><span class="p">[</span><span class="nx">file</span><span class="p">.</span><span class="nx">chunks</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">].</span><span class="nx">send</span><span class="p">();</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">found</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">found</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">found</span><span class="p">;</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Now, simply look for the next, best thing to upload</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">file</span><span class="p">.</span><span class="nx">paused</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">file</span><span class="p">.</span><span class="nx">chunks</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">chunk</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">chunk</span><span class="p">.</span><span class="nx">status</span><span class="p">()</span> <span class="o">===</span> <span class="s1">&#39;pending&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">chunk</span><span class="p">.</span><span class="nx">preprocessState</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chunk</span><span class="p">.</span><span class="nx">send</span><span class="p">();</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">found</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">found</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">found</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC322'><br/></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// The are no more outstanding chunks to upload, check is everything is done</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">outstanding</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">file</span><span class="p">.</span><span class="nx">isComplete</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">outstanding</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">outstanding</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">preventEvents</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// All chunks have been uploaded, complete</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">async</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;complete&#39;</span><span class="p">);</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'><br/></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC342'><span class="cm">     * Assign a browse action to one or more DOM nodes.</span></div><div class='line' id='LC343'><span class="cm">     * @function</span></div><div class='line' id='LC344'><span class="cm">     * @param {Element|Array.&lt;Element&gt;} domNodes</span></div><div class='line' id='LC345'><span class="cm">     * @param {boolean} isDirectory Pass in true to allow directories to</span></div><div class='line' id='LC346'><span class="cm">     * @param {boolean} singleFile prevent multi file upload</span></div><div class='line' id='LC347'><span class="cm">     * @param {Object} attributes set custom attributes:</span></div><div class='line' id='LC348'><span class="cm">     *  http://www.w3.org/TR/html-markup/input.file.html#input.file-attributes</span></div><div class='line' id='LC349'><span class="cm">     *  eg: accept: &#39;image/*&#39;</span></div><div class='line' id='LC350'><span class="cm">     * be selected (Chrome only).</span></div><div class='line' id='LC351'><span class="cm">     */</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assignBrowse</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">domNodes</span><span class="p">,</span> <span class="nx">isDirectory</span><span class="p">,</span> <span class="nx">singleFile</span><span class="p">,</span> <span class="nx">attributes</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">domNodes</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domNodes</span> <span class="o">=</span> <span class="p">[</span><span class="nx">domNodes</span><span class="p">];</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC356'><br/></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">domNodes</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">domNode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">input</span><span class="p">;</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">domNode</span><span class="p">.</span><span class="nx">tagName</span> <span class="o">===</span> <span class="s1">&#39;INPUT&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">domNode</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;file&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">input</span> <span class="o">=</span> <span class="nx">domNode</span><span class="p">;</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">input</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;input&#39;</span><span class="p">);</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">input</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">&#39;type&#39;</span><span class="p">,</span> <span class="s1">&#39;file&#39;</span><span class="p">);</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// display:none - not working in opera 12</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">extend</span><span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">style</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visibility</span><span class="o">:</span> <span class="s1">&#39;hidden&#39;</span><span class="p">,</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">position</span><span class="o">:</span> <span class="s1">&#39;absolute&#39;</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// for opera 12 browser, input must be assigned to a document</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domNode</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">input</span><span class="p">);</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// https://developer.mozilla.org/en/using_files_from_web_applications)</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// event listener is executed two times</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// first one - original mouse click event</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// second - input.click(), input is inside domNode</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domNode</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">input</span><span class="p">.</span><span class="nx">click</span><span class="p">();</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">singleFile</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">singleFile</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">input</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">&#39;multiple&#39;</span><span class="p">,</span> <span class="s1">&#39;multiple&#39;</span><span class="p">);</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isDirectory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">input</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">&#39;webkitdirectory&#39;</span><span class="p">,</span> <span class="s1">&#39;webkitdirectory&#39;</span><span class="p">);</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">attributes</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">input</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// When new files are added, simply append them to the overall list</span></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">input</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;change&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">addFiles</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">files</span><span class="p">,</span> <span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">value</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC396'><br/></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC398'><span class="cm">     * Assign one or more DOM nodes as a drop target.</span></div><div class='line' id='LC399'><span class="cm">     * @function</span></div><div class='line' id='LC400'><span class="cm">     * @param {Element|Array.&lt;Element&gt;} domNodes</span></div><div class='line' id='LC401'><span class="cm">     */</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assignDrop</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">domNodes</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">domNodes</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domNodes</span> <span class="o">=</span> <span class="p">[</span><span class="nx">domNodes</span><span class="p">];</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">domNodes</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">domNode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domNode</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;dragover&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">preventEvent</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domNode</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;dragenter&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">preventEvent</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domNode</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;drop&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onDrop</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC412'><br/></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC414'><span class="cm">     * Un-assign drop event from DOM nodes</span></div><div class='line' id='LC415'><span class="cm">     * @function</span></div><div class='line' id='LC416'><span class="cm">     * @param domNodes</span></div><div class='line' id='LC417'><span class="cm">     */</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">unAssignDrop</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">domNodes</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">domNodes</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domNodes</span> <span class="o">=</span> <span class="p">[</span><span class="nx">domNodes</span><span class="p">];</span></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">domNodes</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">domNode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domNode</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;dragover&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">preventEvent</span><span class="p">);</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domNode</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;dragenter&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">preventEvent</span><span class="p">);</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domNode</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s1">&#39;drop&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onDrop</span><span class="p">);</span></div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC430'><span class="cm">     * Returns a boolean indicating whether or not the instance is currently</span></div><div class='line' id='LC431'><span class="cm">     * uploading anything.</span></div><div class='line' id='LC432'><span class="cm">     * @function</span></div><div class='line' id='LC433'><span class="cm">     * @returns {boolean}</span></div><div class='line' id='LC434'><span class="cm">     */</span></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isUploading</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">uploading</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC438'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">file</span><span class="p">.</span><span class="nx">isUploading</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">uploading</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC443'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">uploading</span><span class="p">;</span></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC445'><br/></div><div class='line' id='LC446'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC447'><span class="cm">     * Start or resume uploading.</span></div><div class='line' id='LC448'><span class="cm">     * @function</span></div><div class='line' id='LC449'><span class="cm">     */</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">upload</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Make sure we don&#39;t start too many uploads at once</span></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isUploading</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Kick off the queue</span></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;uploadStart&#39;</span><span class="p">);</span></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">started</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">num</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">num</span> <span class="o">&lt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">simultaneousUploads</span><span class="p">;</span> <span class="nx">num</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">started</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">uploadNextChunk</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="o">||</span> <span class="nx">started</span><span class="p">;</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">started</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">async</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;complete&#39;</span><span class="p">);</span></div><div class='line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC467'><br/></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC469'><span class="cm">     * Resume uploading.</span></div><div class='line' id='LC470'><span class="cm">     * @function</span></div><div class='line' id='LC471'><span class="cm">     */</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resume</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">file</span><span class="p">.</span><span class="nx">resume</span><span class="p">();</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC477'><br/></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC479'><span class="cm">     * Pause uploading.</span></div><div class='line' id='LC480'><span class="cm">     * @function</span></div><div class='line' id='LC481'><span class="cm">     */</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pause</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">file</span><span class="p">.</span><span class="nx">pause</span><span class="p">();</span></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC487'><br/></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC489'><span class="cm">     * Cancel upload of all FlowFile objects and remove them from the list.</span></div><div class='line' id='LC490'><span class="cm">     * @function</span></div><div class='line' id='LC491'><span class="cm">     */</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cancel</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">cancel</span><span class="p">();</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC497'><br/></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC499'><span class="cm">     * Returns a number between 0 and 1 indicating the current upload progress</span></div><div class='line' id='LC500'><span class="cm">     * of all files.</span></div><div class='line' id='LC501'><span class="cm">     * @function</span></div><div class='line' id='LC502'><span class="cm">     * @returns {number}</span></div><div class='line' id='LC503'><span class="cm">     */</span></div><div class='line' id='LC504'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">progress</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">totalDone</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">totalSize</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC507'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Resume all chunks currently being uploaded</span></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">totalDone</span> <span class="o">+=</span> <span class="nx">file</span><span class="p">.</span><span class="nx">progress</span><span class="p">()</span> <span class="o">*</span> <span class="nx">file</span><span class="p">.</span><span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">totalSize</span> <span class="o">+=</span> <span class="nx">file</span><span class="p">.</span><span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">totalSize</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="nx">totalDone</span> <span class="o">/</span> <span class="nx">totalSize</span> <span class="o">:</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC514'><br/></div><div class='line' id='LC515'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC516'><span class="cm">     * Add a HTML5 File object to the list of files.</span></div><div class='line' id='LC517'><span class="cm">     * @function</span></div><div class='line' id='LC518'><span class="cm">     * @param {File} file</span></div><div class='line' id='LC519'><span class="cm">     * @param {Event} [event] event is optional</span></div><div class='line' id='LC520'><span class="cm">     */</span></div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">addFile</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">,</span> <span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC522'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">addFiles</span><span class="p">([</span><span class="nx">file</span><span class="p">],</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC524'><br/></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC526'><span class="cm">     * Add a HTML5 File object to the list of files.</span></div><div class='line' id='LC527'><span class="cm">     * @function</span></div><div class='line' id='LC528'><span class="cm">     * @param {FileList|Array} fileList</span></div><div class='line' id='LC529'><span class="cm">     * @param {Event} [event] event is optional</span></div><div class='line' id='LC530'><span class="cm">     */</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">addFiles</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">fileList</span><span class="p">,</span> <span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">files</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">fileList</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Directories have size `0` and name `.`</span></div><div class='line' id='LC535'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Ignore already added files</span></div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">file</span><span class="p">.</span><span class="nx">size</span> <span class="o">%</span> <span class="mi">4096</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">file</span><span class="p">.</span><span class="nx">name</span> <span class="o">===</span> <span class="s1">&#39;.&#39;</span> <span class="o">||</span> <span class="nx">file</span><span class="p">.</span><span class="nx">fileName</span> <span class="o">===</span> <span class="s1">&#39;.&#39;</span><span class="p">))</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">getFromUniqueIdentifier</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">generateUniqueIdentifier</span><span class="p">(</span><span class="nx">file</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">f</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">FlowFile</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">file</span><span class="p">);</span></div><div class='line' id='LC539'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;fileAdded&#39;</span><span class="p">,</span> <span class="nx">f</span><span class="p">,</span> <span class="nx">event</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC540'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">files</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">f</span><span class="p">);</span></div><div class='line' id='LC541'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;filesAdded&#39;</span><span class="p">,</span> <span class="nx">files</span><span class="p">,</span> <span class="nx">event</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC545'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">files</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">singleFile</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">removeFile</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC548'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC549'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">file</span><span class="p">);</span></div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC551'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;filesSubmitted&#39;</span><span class="p">,</span> <span class="nx">files</span><span class="p">,</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC553'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC554'><br/></div><div class='line' id='LC555'><br/></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC557'><span class="cm">     * Cancel upload of a specific FlowFile object from the list.</span></div><div class='line' id='LC558'><span class="cm">     * @function</span></div><div class='line' id='LC559'><span class="cm">     * @param {FlowFile} file</span></div><div class='line' id='LC560'><span class="cm">     */</span></div><div class='line' id='LC561'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">removeFile</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC563'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC564'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC565'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">file</span><span class="p">.</span><span class="nx">abort</span><span class="p">();</span></div><div class='line' id='LC566'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC567'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC568'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC569'><br/></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC571'><span class="cm">     * Look up a FlowFile object by its unique identifier.</span></div><div class='line' id='LC572'><span class="cm">     * @function</span></div><div class='line' id='LC573'><span class="cm">     * @param {string} uniqueIdentifier</span></div><div class='line' id='LC574'><span class="cm">     * @returns {boolean|FlowFile} false if file was not found</span></div><div class='line' id='LC575'><span class="cm">     */</span></div><div class='line' id='LC576'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getFromUniqueIdentifier</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">uniqueIdentifier</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC577'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ret</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC578'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC579'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">file</span><span class="p">.</span><span class="nx">uniqueIdentifier</span> <span class="o">===</span> <span class="nx">uniqueIdentifier</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC580'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ret</span> <span class="o">=</span> <span class="nx">file</span><span class="p">;</span></div><div class='line' id='LC581'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC582'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC583'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC584'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC585'><br/></div><div class='line' id='LC586'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC587'><span class="cm">     * Returns the total size of all files in bytes.</span></div><div class='line' id='LC588'><span class="cm">     * @function</span></div><div class='line' id='LC589'><span class="cm">     * @returns {number}</span></div><div class='line' id='LC590'><span class="cm">     */</span></div><div class='line' id='LC591'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getSize</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC592'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">totalSize</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC593'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC594'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">totalSize</span> <span class="o">+=</span> <span class="nx">file</span><span class="p">.</span><span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC595'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">totalSize</span><span class="p">;</span></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC598'><br/></div><div class='line' id='LC599'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC600'><span class="cm">     * Returns the total size uploaded of all files in bytes.</span></div><div class='line' id='LC601'><span class="cm">     * @function</span></div><div class='line' id='LC602'><span class="cm">     * @returns {number}</span></div><div class='line' id='LC603'><span class="cm">     */</span></div><div class='line' id='LC604'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sizeUploaded</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC605'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC606'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC607'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">size</span> <span class="o">+=</span> <span class="nx">file</span><span class="p">.</span><span class="nx">sizeUploaded</span><span class="p">();</span></div><div class='line' id='LC608'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC609'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC610'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC611'><br/></div><div class='line' id='LC612'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC613'><span class="cm">     * Returns remaining time to upload all files in seconds. Accuracy is based on average speed.</span></div><div class='line' id='LC614'><span class="cm">     * If speed is zero, time remaining will be equal to positive infinity `Number.POSITIVE_INFINITY`</span></div><div class='line' id='LC615'><span class="cm">     * @function</span></div><div class='line' id='LC616'><span class="cm">     * @returns {number}</span></div><div class='line' id='LC617'><span class="cm">     */</span></div><div class='line' id='LC618'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeRemaining</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC619'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sizeDelta</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC620'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">averageSpeed</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC621'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">files</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC622'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">file</span><span class="p">.</span><span class="nx">paused</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">file</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC623'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sizeDelta</span> <span class="o">+=</span> <span class="nx">file</span><span class="p">.</span><span class="nx">size</span> <span class="o">-</span> <span class="nx">file</span><span class="p">.</span><span class="nx">sizeUploaded</span><span class="p">();</span></div><div class='line' id='LC624'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">averageSpeed</span> <span class="o">+=</span> <span class="nx">file</span><span class="p">.</span><span class="nx">averageSpeed</span><span class="p">;</span></div><div class='line' id='LC625'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC626'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC627'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">sizeDelta</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">averageSpeed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC628'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Number</span><span class="p">.</span><span class="nx">POSITIVE_INFINITY</span><span class="p">;</span></div><div class='line' id='LC629'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">sizeDelta</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">averageSpeed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC632'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC633'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">sizeDelta</span> <span class="o">/</span> <span class="nx">averageSpeed</span><span class="p">);</span></div><div class='line' id='LC634'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC635'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC636'><br/></div><div class='line' id='LC637'><br/></div><div class='line' id='LC638'><br/></div><div class='line' id='LC639'><br/></div><div class='line' id='LC640'><br/></div><div class='line' id='LC641'><br/></div><div class='line' id='LC642'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC643'><span class="cm">   * FlowFile class</span></div><div class='line' id='LC644'><span class="cm">   * @name FlowFile</span></div><div class='line' id='LC645'><span class="cm">   * @param {Flow} flowObj</span></div><div class='line' id='LC646'><span class="cm">   * @param {File} file</span></div><div class='line' id='LC647'><span class="cm">   * @constructor</span></div><div class='line' id='LC648'><span class="cm">   */</span></div><div class='line' id='LC649'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">FlowFile</span><span class="p">(</span><span class="nx">flowObj</span><span class="p">,</span> <span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC650'><br/></div><div class='line' id='LC651'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC652'><span class="cm">     * Reference to parent Flow instance</span></div><div class='line' id='LC653'><span class="cm">     * @type {Flow}</span></div><div class='line' id='LC654'><span class="cm">     */</span></div><div class='line' id='LC655'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span> <span class="o">=</span> <span class="nx">flowObj</span><span class="p">;</span></div><div class='line' id='LC656'><br/></div><div class='line' id='LC657'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC658'><span class="cm">     * Reference to file</span></div><div class='line' id='LC659'><span class="cm">     * @type {File}</span></div><div class='line' id='LC660'><span class="cm">     */</span></div><div class='line' id='LC661'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">file</span> <span class="o">=</span> <span class="nx">file</span><span class="p">;</span></div><div class='line' id='LC662'><br/></div><div class='line' id='LC663'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC664'><span class="cm">     * File name. Some confusion in different versions of Firefox</span></div><div class='line' id='LC665'><span class="cm">     * @type {string}</span></div><div class='line' id='LC666'><span class="cm">     */</span></div><div class='line' id='LC667'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">file</span><span class="p">.</span><span class="nx">fileName</span> <span class="o">||</span> <span class="nx">file</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC668'><br/></div><div class='line' id='LC669'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC670'><span class="cm">     * File size</span></div><div class='line' id='LC671'><span class="cm">     * @type {number}</span></div><div class='line' id='LC672'><span class="cm">     */</span></div><div class='line' id='LC673'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">size</span> <span class="o">=</span> <span class="nx">file</span><span class="p">.</span><span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC674'><br/></div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC676'><span class="cm">     * Relative file path</span></div><div class='line' id='LC677'><span class="cm">     * @type {string}</span></div><div class='line' id='LC678'><span class="cm">     */</span></div><div class='line' id='LC679'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">relativePath</span> <span class="o">=</span> <span class="nx">file</span><span class="p">.</span><span class="nx">relativePath</span> <span class="o">||</span> <span class="nx">file</span><span class="p">.</span><span class="nx">webkitRelativePath</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC680'><br/></div><div class='line' id='LC681'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC682'><span class="cm">     * File unique identifier</span></div><div class='line' id='LC683'><span class="cm">     * @type {string}</span></div><div class='line' id='LC684'><span class="cm">     */</span></div><div class='line' id='LC685'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">uniqueIdentifier</span> <span class="o">=</span> <span class="nx">flowObj</span><span class="p">.</span><span class="nx">generateUniqueIdentifier</span><span class="p">(</span><span class="nx">file</span><span class="p">);</span></div><div class='line' id='LC686'><br/></div><div class='line' id='LC687'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC688'><span class="cm">     * List of chunks</span></div><div class='line' id='LC689'><span class="cm">     * @type {Array.&lt;FlowChunk&gt;}</span></div><div class='line' id='LC690'><span class="cm">     */</span></div><div class='line' id='LC691'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">chunks</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC692'><br/></div><div class='line' id='LC693'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC694'><span class="cm">     * Indicated if file is paused</span></div><div class='line' id='LC695'><span class="cm">     * @type {boolean}</span></div><div class='line' id='LC696'><span class="cm">     */</span></div><div class='line' id='LC697'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">paused</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC698'><br/></div><div class='line' id='LC699'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC700'><span class="cm">     * Indicated if file has encountered an error</span></div><div class='line' id='LC701'><span class="cm">     * @type {boolean}</span></div><div class='line' id='LC702'><span class="cm">     */</span></div><div class='line' id='LC703'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">error</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC704'><br/></div><div class='line' id='LC705'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC706'><span class="cm">     * Average upload speed</span></div><div class='line' id='LC707'><span class="cm">     * @type {number}</span></div><div class='line' id='LC708'><span class="cm">     */</span></div><div class='line' id='LC709'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">averageSpeed</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC710'><br/></div><div class='line' id='LC711'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC712'><span class="cm">     * Current upload speed</span></div><div class='line' id='LC713'><span class="cm">     * @type {number}</span></div><div class='line' id='LC714'><span class="cm">     */</span></div><div class='line' id='LC715'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">currentSpeed</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC716'><br/></div><div class='line' id='LC717'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC718'><span class="cm">     * Date then progress was called last time</span></div><div class='line' id='LC719'><span class="cm">     * @type {number}</span></div><div class='line' id='LC720'><span class="cm">     * @private</span></div><div class='line' id='LC721'><span class="cm">     */</span></div><div class='line' id='LC722'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_lastProgressCallback</span> <span class="o">=</span> <span class="nb">Date</span><span class="p">.</span><span class="nx">now</span><span class="p">();</span></div><div class='line' id='LC723'><br/></div><div class='line' id='LC724'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC725'><span class="cm">     * Previously uploaded file size</span></div><div class='line' id='LC726'><span class="cm">     * @type {number}</span></div><div class='line' id='LC727'><span class="cm">     * @private</span></div><div class='line' id='LC728'><span class="cm">     */</span></div><div class='line' id='LC729'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_prevUploadedSize</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC730'><br/></div><div class='line' id='LC731'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC732'><span class="cm">     * Holds previous progress</span></div><div class='line' id='LC733'><span class="cm">     * @type {number}</span></div><div class='line' id='LC734'><span class="cm">     * @private</span></div><div class='line' id='LC735'><span class="cm">     */</span></div><div class='line' id='LC736'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_prevProgress</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC737'><br/></div><div class='line' id='LC738'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">bootstrap</span><span class="p">();</span></div><div class='line' id='LC739'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC740'><br/></div><div class='line' id='LC741'>&nbsp;&nbsp;<span class="nx">FlowFile</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC742'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC743'><span class="cm">     * Update speed parameters</span></div><div class='line' id='LC744'><span class="cm">     * @link http://stackoverflow.com/questions/2779600/how-to-estimate-download-time-remaining-accurately</span></div><div class='line' id='LC745'><span class="cm">     * @function</span></div><div class='line' id='LC746'><span class="cm">     */</span></div><div class='line' id='LC747'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">measureSpeed</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC748'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">timeSpan</span> <span class="o">=</span> <span class="nb">Date</span><span class="p">.</span><span class="nx">now</span><span class="p">()</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">_lastProgressCallback</span><span class="p">;</span></div><div class='line' id='LC749'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">timeSpan</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC750'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">;</span></div><div class='line' id='LC751'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC752'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">smoothingFactor</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">speedSmoothingFactor</span><span class="p">;</span></div><div class='line' id='LC753'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">uploaded</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">sizeUploaded</span><span class="p">();</span></div><div class='line' id='LC754'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Prevent negative upload speed after file upload resume</span></div><div class='line' id='LC755'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">currentSpeed</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">((</span><span class="nx">uploaded</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">_prevUploadedSize</span><span class="p">)</span> <span class="o">/</span> <span class="nx">timeSpan</span> <span class="o">*</span> <span class="mi">1000</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC756'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">averageSpeed</span> <span class="o">=</span> <span class="nx">smoothingFactor</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">currentSpeed</span> <span class="o">+</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="nx">smoothingFactor</span><span class="p">)</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">averageSpeed</span><span class="p">;</span></div><div class='line' id='LC757'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_prevUploadedSize</span> <span class="o">=</span> <span class="nx">uploaded</span><span class="p">;</span></div><div class='line' id='LC758'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC759'><br/></div><div class='line' id='LC760'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC761'><span class="cm">     * For internal usage only.</span></div><div class='line' id='LC762'><span class="cm">     * Callback when something happens within the chunk.</span></div><div class='line' id='LC763'><span class="cm">     * @function</span></div><div class='line' id='LC764'><span class="cm">     * @param {string} event can be &#39;progress&#39;, &#39;success&#39;, &#39;error&#39; or &#39;retry&#39;</span></div><div class='line' id='LC765'><span class="cm">     * @param {string} [message]</span></div><div class='line' id='LC766'><span class="cm">     */</span></div><div class='line' id='LC767'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chunkEvent</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">message</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC768'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC769'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;progress&#39;</span><span class="o">:</span></div><div class='line' id='LC770'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Date</span><span class="p">.</span><span class="nx">now</span><span class="p">()</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">_lastProgressCallback</span> <span class="o">&lt;</span></div><div class='line' id='LC771'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">progressCallbacksInterval</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC772'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC773'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC774'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">measureSpeed</span><span class="p">();</span></div><div class='line' id='LC775'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;fileProgress&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC776'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;progress&#39;</span><span class="p">);</span></div><div class='line' id='LC777'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_lastProgressCallback</span> <span class="o">=</span> <span class="nb">Date</span><span class="p">.</span><span class="nx">now</span><span class="p">();</span></div><div class='line' id='LC778'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC779'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;error&#39;</span><span class="o">:</span></div><div class='line' id='LC780'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">error</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC781'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">abort</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC782'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;fileError&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC783'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;error&#39;</span><span class="p">,</span> <span class="nx">message</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC784'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC785'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;success&#39;</span><span class="o">:</span></div><div class='line' id='LC786'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC787'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC788'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC789'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">measureSpeed</span><span class="p">();</span></div><div class='line' id='LC790'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;fileProgress&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC791'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;progress&#39;</span><span class="p">);</span></div><div class='line' id='LC792'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_lastProgressCallback</span> <span class="o">=</span> <span class="nb">Date</span><span class="p">.</span><span class="nx">now</span><span class="p">();</span></div><div class='line' id='LC793'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isComplete</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC794'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">currentSpeed</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC795'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">averageSpeed</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC796'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;fileSuccess&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC797'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC798'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC799'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;retry&#39;</span><span class="o">:</span></div><div class='line' id='LC800'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="s1">&#39;fileRetry&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC801'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC802'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC803'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC804'><br/></div><div class='line' id='LC805'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC806'><span class="cm">     * Pause file upload</span></div><div class='line' id='LC807'><span class="cm">     * @function</span></div><div class='line' id='LC808'><span class="cm">     */</span></div><div class='line' id='LC809'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pause</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC810'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">paused</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC811'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">abort</span><span class="p">();</span></div><div class='line' id='LC812'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC813'><br/></div><div class='line' id='LC814'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC815'><span class="cm">     * Resume file upload</span></div><div class='line' id='LC816'><span class="cm">     * @function</span></div><div class='line' id='LC817'><span class="cm">     */</span></div><div class='line' id='LC818'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resume</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC819'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">paused</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC820'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">upload</span><span class="p">();</span></div><div class='line' id='LC821'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC822'><br/></div><div class='line' id='LC823'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC824'><span class="cm">     * Abort current upload</span></div><div class='line' id='LC825'><span class="cm">     * @function</span></div><div class='line' id='LC826'><span class="cm">     */</span></div><div class='line' id='LC827'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">abort</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">reset</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC828'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">currentSpeed</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC829'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">averageSpeed</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC830'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">chunks</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">chunks</span><span class="p">;</span></div><div class='line' id='LC831'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">reset</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC832'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">chunks</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC833'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC834'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">chunks</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">c</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC835'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">status</span><span class="p">()</span> <span class="o">===</span> <span class="s1">&#39;uploading&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC836'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span><span class="p">.</span><span class="nx">abort</span><span class="p">();</span></div><div class='line' id='LC837'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">uploadNextChunk</span><span class="p">();</span></div><div class='line' id='LC838'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC839'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC840'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC841'><br/></div><div class='line' id='LC842'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC843'><span class="cm">     * Cancel current upload and remove from a list</span></div><div class='line' id='LC844'><span class="cm">     * @function</span></div><div class='line' id='LC845'><span class="cm">     */</span></div><div class='line' id='LC846'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cancel</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC847'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">removeFile</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC848'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC849'><br/></div><div class='line' id='LC850'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC851'><span class="cm">     * Retry aborted file upload</span></div><div class='line' id='LC852'><span class="cm">     * @function</span></div><div class='line' id='LC853'><span class="cm">     */</span></div><div class='line' id='LC854'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">retry</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC855'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">bootstrap</span><span class="p">();</span></div><div class='line' id='LC856'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">upload</span><span class="p">();</span></div><div class='line' id='LC857'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC858'><br/></div><div class='line' id='LC859'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC860'><span class="cm">     * Clear current chunks and slice file again</span></div><div class='line' id='LC861'><span class="cm">     * @function</span></div><div class='line' id='LC862'><span class="cm">     */</span></div><div class='line' id='LC863'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bootstrap</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC864'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">abort</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC865'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">error</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC866'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Rebuild stack of chunks from file</span></div><div class='line' id='LC867'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_prevProgress</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC868'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">round</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">forceChunkSize</span> <span class="o">?</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span> <span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">;</span></div><div class='line' id='LC869'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">chunks</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span></div><div class='line' id='LC870'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">round</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">file</span><span class="p">.</span><span class="nx">size</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">chunkSize</span><span class="p">),</span> <span class="mi">1</span></div><div class='line' id='LC871'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC872'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">offset</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">offset</span> <span class="o">&lt;</span> <span class="nx">chunks</span><span class="p">;</span> <span class="nx">offset</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC873'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">chunks</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></div><div class='line' id='LC874'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">FlowChunk</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">offset</span><span class="p">)</span></div><div class='line' id='LC875'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC876'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC877'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC878'><br/></div><div class='line' id='LC879'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC880'><span class="cm">     * Get current upload progress status</span></div><div class='line' id='LC881'><span class="cm">     * @function</span></div><div class='line' id='LC882'><span class="cm">     * @returns {number} from 0 to 1</span></div><div class='line' id='LC883'><span class="cm">     */</span></div><div class='line' id='LC884'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">progress</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC885'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC886'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC887'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC888'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">chunks</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC889'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_prevProgress</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_prevProgress</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">chunks</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">progress</span><span class="p">());</span></div><div class='line' id='LC890'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_prevProgress</span><span class="p">;</span></div><div class='line' id='LC891'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC892'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Sum up progress across everything</span></div><div class='line' id='LC893'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">bytesLoaded</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC894'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">chunks</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">c</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC895'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// get chunk progress relative to entire file</span></div><div class='line' id='LC896'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bytesLoaded</span> <span class="o">+=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">progress</span><span class="p">()</span> <span class="o">*</span> <span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">endByte</span> <span class="o">-</span> <span class="nx">c</span><span class="p">.</span><span class="nx">startByte</span><span class="p">);</span></div><div class='line' id='LC897'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC898'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">percent</span> <span class="o">=</span> <span class="nx">bytesLoaded</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC899'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// We don&#39;t want to lose percentages when an upload is paused</span></div><div class='line' id='LC900'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_prevProgress</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_prevProgress</span><span class="p">,</span> <span class="nx">percent</span> <span class="o">&gt;</span> <span class="mf">0.999</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC901'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_prevProgress</span><span class="p">;</span></div><div class='line' id='LC902'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC903'><br/></div><div class='line' id='LC904'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC905'><span class="cm">     * Indicates if file is being uploaded at the moment</span></div><div class='line' id='LC906'><span class="cm">     * @function</span></div><div class='line' id='LC907'><span class="cm">     * @returns {boolean}</span></div><div class='line' id='LC908'><span class="cm">     */</span></div><div class='line' id='LC909'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isUploading</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC910'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">uploading</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC911'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">chunks</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">chunk</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC912'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">chunk</span><span class="p">.</span><span class="nx">status</span><span class="p">()</span> <span class="o">===</span> <span class="s1">&#39;uploading&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC913'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">uploading</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC914'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC915'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC916'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC917'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">uploading</span><span class="p">;</span></div><div class='line' id='LC918'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC919'><br/></div><div class='line' id='LC920'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC921'><span class="cm">     * Indicates if file is has finished uploading and received a response</span></div><div class='line' id='LC922'><span class="cm">     * @function</span></div><div class='line' id='LC923'><span class="cm">     * @returns {boolean}</span></div><div class='line' id='LC924'><span class="cm">     */</span></div><div class='line' id='LC925'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isComplete</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC926'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">outstanding</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC927'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">chunks</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">chunk</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC928'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">status</span> <span class="o">=</span> <span class="nx">chunk</span><span class="p">.</span><span class="nx">status</span><span class="p">();</span></div><div class='line' id='LC929'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">status</span> <span class="o">===</span> <span class="s1">&#39;pending&#39;</span> <span class="o">||</span> <span class="nx">status</span> <span class="o">===</span> <span class="s1">&#39;uploading&#39;</span> <span class="o">||</span> <span class="nx">chunk</span><span class="p">.</span><span class="nx">preprocessState</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC930'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">outstanding</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC931'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC932'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC933'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC934'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!</span><span class="nx">outstanding</span><span class="p">;</span></div><div class='line' id='LC935'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC936'><br/></div><div class='line' id='LC937'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC938'><span class="cm">     * Count total size uploaded</span></div><div class='line' id='LC939'><span class="cm">     * @function</span></div><div class='line' id='LC940'><span class="cm">     * @returns {number}</span></div><div class='line' id='LC941'><span class="cm">     */</span></div><div class='line' id='LC942'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sizeUploaded</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC943'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC944'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">chunks</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">chunk</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC945'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">size</span> <span class="o">+=</span> <span class="nx">chunk</span><span class="p">.</span><span class="nx">sizeUploaded</span><span class="p">();</span></div><div class='line' id='LC946'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC947'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC948'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC949'><br/></div><div class='line' id='LC950'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC951'><span class="cm">     * Returns remaining time to finish upload file in seconds. Accuracy is based on average speed.</span></div><div class='line' id='LC952'><span class="cm">     * If speed is zero, time remaining will be equal to positive infinity `Number.POSITIVE_INFINITY`</span></div><div class='line' id='LC953'><span class="cm">     * @function</span></div><div class='line' id='LC954'><span class="cm">     * @returns {number}</span></div><div class='line' id='LC955'><span class="cm">     */</span></div><div class='line' id='LC956'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeRemaining</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC957'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">paused</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC958'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC959'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC960'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">delta</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">size</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">sizeUploaded</span><span class="p">();</span></div><div class='line' id='LC961'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">delta</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">averageSpeed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC962'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Number</span><span class="p">.</span><span class="nx">POSITIVE_INFINITY</span><span class="p">;</span></div><div class='line' id='LC963'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC964'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">delta</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">averageSpeed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC965'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC966'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC967'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">delta</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">averageSpeed</span><span class="p">);</span></div><div class='line' id='LC968'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC969'><br/></div><div class='line' id='LC970'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC971'><span class="cm">     * Get file type</span></div><div class='line' id='LC972'><span class="cm">     * @function</span></div><div class='line' id='LC973'><span class="cm">     * @returns {string}</span></div><div class='line' id='LC974'><span class="cm">     */</span></div><div class='line' id='LC975'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getType</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC976'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">file</span><span class="p">.</span><span class="nx">type</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">file</span><span class="p">.</span><span class="nx">type</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">)[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC977'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC978'><br/></div><div class='line' id='LC979'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC980'><span class="cm">     * Get file extension</span></div><div class='line' id='LC981'><span class="cm">     * @function</span></div><div class='line' id='LC982'><span class="cm">     * @returns {string}</span></div><div class='line' id='LC983'><span class="cm">     */</span></div><div class='line' id='LC984'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getExtension</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC985'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">substr</span><span class="p">((</span><span class="o">~-</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">)</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="o">+</span> <span class="mi">2</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC986'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC987'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC988'><br/></div><div class='line' id='LC989'><br/></div><div class='line' id='LC990'><br/></div><div class='line' id='LC991'><br/></div><div class='line' id='LC992'><br/></div><div class='line' id='LC993'><br/></div><div class='line' id='LC994'><br/></div><div class='line' id='LC995'><br/></div><div class='line' id='LC996'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC997'><span class="cm">   * Class for storing a single chunk</span></div><div class='line' id='LC998'><span class="cm">   * @name FlowChunk</span></div><div class='line' id='LC999'><span class="cm">   * @param {Flow} flowObj</span></div><div class='line' id='LC1000'><span class="cm">   * @param {FlowFile} fileObj</span></div><div class='line' id='LC1001'><span class="cm">   * @param {number} offset</span></div><div class='line' id='LC1002'><span class="cm">   * @constructor</span></div><div class='line' id='LC1003'><span class="cm">   */</span></div><div class='line' id='LC1004'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">FlowChunk</span><span class="p">(</span><span class="nx">flowObj</span><span class="p">,</span> <span class="nx">fileObj</span><span class="p">,</span> <span class="nx">offset</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1005'><br/></div><div class='line' id='LC1006'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1007'><span class="cm">     * Reference to parent flow object</span></div><div class='line' id='LC1008'><span class="cm">     * @type {Flow}</span></div><div class='line' id='LC1009'><span class="cm">     */</span></div><div class='line' id='LC1010'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span> <span class="o">=</span> <span class="nx">flowObj</span><span class="p">;</span></div><div class='line' id='LC1011'><br/></div><div class='line' id='LC1012'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1013'><span class="cm">     * Reference to parent FlowFile object</span></div><div class='line' id='LC1014'><span class="cm">     * @type {FlowFile}</span></div><div class='line' id='LC1015'><span class="cm">     */</span></div><div class='line' id='LC1016'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fileObj</span> <span class="o">=</span> <span class="nx">fileObj</span><span class="p">;</span></div><div class='line' id='LC1017'><br/></div><div class='line' id='LC1018'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1019'><span class="cm">     * File size</span></div><div class='line' id='LC1020'><span class="cm">     * @type {number}</span></div><div class='line' id='LC1021'><span class="cm">     */</span></div><div class='line' id='LC1022'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fileObjSize</span> <span class="o">=</span> <span class="nx">fileObj</span><span class="p">.</span><span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC1023'><br/></div><div class='line' id='LC1024'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1025'><span class="cm">     * File offset</span></div><div class='line' id='LC1026'><span class="cm">     * @type {number}</span></div><div class='line' id='LC1027'><span class="cm">     */</span></div><div class='line' id='LC1028'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">offset</span> <span class="o">=</span> <span class="nx">offset</span><span class="p">;</span></div><div class='line' id='LC1029'><br/></div><div class='line' id='LC1030'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1031'><span class="cm">     * Indicates if chunk existence was checked on the server</span></div><div class='line' id='LC1032'><span class="cm">     * @type {boolean}</span></div><div class='line' id='LC1033'><span class="cm">     */</span></div><div class='line' id='LC1034'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">tested</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1035'><br/></div><div class='line' id='LC1036'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1037'><span class="cm">     * Number of retries performed</span></div><div class='line' id='LC1038'><span class="cm">     * @type {number}</span></div><div class='line' id='LC1039'><span class="cm">     */</span></div><div class='line' id='LC1040'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">retries</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1041'><br/></div><div class='line' id='LC1042'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1043'><span class="cm">     * Pending retry</span></div><div class='line' id='LC1044'><span class="cm">     * @type {boolean}</span></div><div class='line' id='LC1045'><span class="cm">     */</span></div><div class='line' id='LC1046'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">pendingRetry</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1047'><br/></div><div class='line' id='LC1048'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1049'><span class="cm">     * Preprocess state</span></div><div class='line' id='LC1050'><span class="cm">     * @type {number} 0 = unprocessed, 1 = processing, 2 = finished</span></div><div class='line' id='LC1051'><span class="cm">     */</span></div><div class='line' id='LC1052'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">preprocessState</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1053'><br/></div><div class='line' id='LC1054'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1055'><span class="cm">     * Bytes transferred from total request size</span></div><div class='line' id='LC1056'><span class="cm">     * @type {number}</span></div><div class='line' id='LC1057'><span class="cm">     */</span></div><div class='line' id='LC1058'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">loaded</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1059'><br/></div><div class='line' id='LC1060'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1061'><span class="cm">     * Total request size</span></div><div class='line' id='LC1062'><span class="cm">     * @type {number}</span></div><div class='line' id='LC1063'><span class="cm">     */</span></div><div class='line' id='LC1064'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">total</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1065'><br/></div><div class='line' id='LC1066'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1067'><span class="cm">     * Size of a chunk</span></div><div class='line' id='LC1068'><span class="cm">     * @type {number}</span></div><div class='line' id='LC1069'><span class="cm">     */</span></div><div class='line' id='LC1070'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">chunkSize</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">chunkSize</span><span class="p">;</span></div><div class='line' id='LC1071'><br/></div><div class='line' id='LC1072'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1073'><span class="cm">     * Chunk start byte in a file</span></div><div class='line' id='LC1074'><span class="cm">     * @type {number}</span></div><div class='line' id='LC1075'><span class="cm">     */</span></div><div class='line' id='LC1076'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">startByte</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">offset</span> <span class="o">*</span> <span class="nx">chunkSize</span><span class="p">;</span></div><div class='line' id='LC1077'><br/></div><div class='line' id='LC1078'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1079'><span class="cm">     * Chunk end byte in a file</span></div><div class='line' id='LC1080'><span class="cm">     * @type {number}</span></div><div class='line' id='LC1081'><span class="cm">     */</span></div><div class='line' id='LC1082'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">endByte</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fileObjSize</span><span class="p">,</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">offset</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="nx">chunkSize</span><span class="p">);</span></div><div class='line' id='LC1083'><br/></div><div class='line' id='LC1084'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1085'><span class="cm">     * XMLHttpRequest</span></div><div class='line' id='LC1086'><span class="cm">     * @type {XMLHttpRequest}</span></div><div class='line' id='LC1087'><span class="cm">     */</span></div><div class='line' id='LC1088'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1089'><br/></div><div class='line' id='LC1090'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fileObjSize</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">endByte</span> <span class="o">&lt;</span> <span class="nx">chunkSize</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC1091'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">forceChunkSize</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1092'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// The last chunk will be bigger than the chunk size,</span></div><div class='line' id='LC1093'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// but less than 2*chunkSize</span></div><div class='line' id='LC1094'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">endByte</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">fileObjSize</span><span class="p">;</span></div><div class='line' id='LC1095'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1096'><br/></div><div class='line' id='LC1097'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1098'><br/></div><div class='line' id='LC1099'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1100'><span class="cm">     * Catch progress event</span></div><div class='line' id='LC1101'><span class="cm">     * @param {ProgressEvent} event</span></div><div class='line' id='LC1102'><span class="cm">     */</span></div><div class='line' id='LC1103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">progressHandler</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">lengthComputable</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">loaded</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">loaded</span> <span class="p">;</span></div><div class='line' id='LC1106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">total</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">total</span><span class="p">;</span></div><div class='line' id='LC1107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">.</span><span class="nx">chunkEvent</span><span class="p">(</span><span class="s1">&#39;progress&#39;</span><span class="p">);</span></div><div class='line' id='LC1109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1110'><br/></div><div class='line' id='LC1111'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1112'><span class="cm">     * Catch test event</span></div><div class='line' id='LC1113'><span class="cm">     * @param {Event} event</span></div><div class='line' id='LC1114'><span class="cm">     */</span></div><div class='line' id='LC1115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">testHandler</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">status</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">status</span><span class="p">();</span></div><div class='line' id='LC1117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">status</span> <span class="o">===</span> <span class="s1">&#39;success&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">tested</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">.</span><span class="nx">chunkEvent</span><span class="p">(</span><span class="nx">status</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">message</span><span class="p">());</span></div><div class='line' id='LC1120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">uploadNextChunk</span><span class="p">();</span></div><div class='line' id='LC1121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">.</span><span class="nx">paused</span><span class="p">)</span> <span class="p">{</span><span class="c1">// Error might be caused by file pause method</span></div><div class='line' id='LC1122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">tested</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">send</span><span class="p">();</span></div><div class='line' id='LC1124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1126'><br/></div><div class='line' id='LC1127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1128'><span class="cm">     * Upload has stopped</span></div><div class='line' id='LC1129'><span class="cm">     * @param {Event} event</span></div><div class='line' id='LC1130'><span class="cm">     */</span></div><div class='line' id='LC1131'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">doneHandler</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">status</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">status</span><span class="p">();</span></div><div class='line' id='LC1133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">status</span> <span class="o">===</span> <span class="s1">&#39;success&#39;</span> <span class="o">||</span> <span class="nx">status</span> <span class="o">===</span> <span class="s1">&#39;error&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">.</span><span class="nx">chunkEvent</span><span class="p">(</span><span class="nx">status</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">message</span><span class="p">());</span></div><div class='line' id='LC1135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">uploadNextChunk</span><span class="p">();</span></div><div class='line' id='LC1136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">.</span><span class="nx">chunkEvent</span><span class="p">(</span><span class="s1">&#39;retry&#39;</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">message</span><span class="p">());</span></div><div class='line' id='LC1138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">pendingRetry</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">abort</span><span class="p">();</span></div><div class='line' id='LC1140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">retries</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC1141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">retryInterval</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">chunkRetryInterval</span><span class="p">;</span></div><div class='line' id='LC1142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">retryInterval</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">send</span><span class="p">();</span></div><div class='line' id='LC1145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">retryInterval</span><span class="p">);</span></div><div class='line' id='LC1146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">send</span><span class="p">();</span></div><div class='line' id='LC1148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1151'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1152'><br/></div><div class='line' id='LC1153'>&nbsp;&nbsp;<span class="nx">FlowChunk</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1154'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1155'><span class="cm">     * Get params for a request</span></div><div class='line' id='LC1156'><span class="cm">     * @function</span></div><div class='line' id='LC1157'><span class="cm">     */</span></div><div class='line' id='LC1158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getParams</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC1160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flowChunkNumber</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">offset</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC1161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flowChunkSize</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">chunkSize</span><span class="p">,</span></div><div class='line' id='LC1162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flowCurrentChunkSize</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">endByte</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">startByte</span><span class="p">,</span></div><div class='line' id='LC1163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flowTotalSize</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">fileObjSize</span><span class="p">,</span></div><div class='line' id='LC1164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flowIdentifier</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">.</span><span class="nx">uniqueIdentifier</span><span class="p">,</span></div><div class='line' id='LC1165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flowFilename</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span></div><div class='line' id='LC1166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flowRelativePath</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">.</span><span class="nx">relativePath</span><span class="p">,</span></div><div class='line' id='LC1167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flowTotalChunks</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">.</span><span class="nx">chunks</span><span class="p">.</span><span class="nx">length</span></div><div class='line' id='LC1168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1169'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1170'><br/></div><div class='line' id='LC1171'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1172'><span class="cm">     * Get target option with query params</span></div><div class='line' id='LC1173'><span class="cm">     * @function</span></div><div class='line' id='LC1174'><span class="cm">     * @param params</span></div><div class='line' id='LC1175'><span class="cm">     * @returns {string}</span></div><div class='line' id='LC1176'><span class="cm">     */</span></div><div class='line' id='LC1177'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getTarget</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">params</span><span class="p">){</span></div><div class='line' id='LC1178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">target</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">target</span><span class="p">;</span></div><div class='line' id='LC1179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">target</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;?&#39;</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">target</span> <span class="o">+=</span> <span class="s1">&#39;?&#39;</span><span class="p">;</span></div><div class='line' id='LC1181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">target</span> <span class="o">+=</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">;</span></div><div class='line' id='LC1183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">target</span> <span class="o">+</span> <span class="nx">params</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&amp;&#39;</span><span class="p">);</span></div><div class='line' id='LC1185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1186'><br/></div><div class='line' id='LC1187'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1188'><span class="cm">     * Makes a GET request without any data to see if the chunk has already</span></div><div class='line' id='LC1189'><span class="cm">     * been uploaded in a previous session</span></div><div class='line' id='LC1190'><span class="cm">     * @function</span></div><div class='line' id='LC1191'><span class="cm">     */</span></div><div class='line' id='LC1192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">test</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set up request and listen for event</span></div><div class='line' id='LC1194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">();</span></div><div class='line' id='LC1195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;load&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">testHandler</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC1196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;error&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">testHandler</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC1197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">prepareXhrRequest</span><span class="p">(</span><span class="s1">&#39;GET&#39;</span><span class="p">);</span></div><div class='line' id='LC1198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC1199'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1200'><br/></div><div class='line' id='LC1201'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1202'><span class="cm">     * Finish preprocess state</span></div><div class='line' id='LC1203'><span class="cm">     * @function</span></div><div class='line' id='LC1204'><span class="cm">     */</span></div><div class='line' id='LC1205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">preprocessFinished</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">preprocessState</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC1207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">send</span><span class="p">();</span></div><div class='line' id='LC1208'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1209'><br/></div><div class='line' id='LC1210'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1211'><span class="cm">     * Uploads the actual data in a POST call</span></div><div class='line' id='LC1212'><span class="cm">     * @function</span></div><div class='line' id='LC1213'><span class="cm">     */</span></div><div class='line' id='LC1214'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">send</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">preprocess</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">preprocess</span><span class="p">;</span></div><div class='line' id='LC1216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">preprocess</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">preprocessState</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">0</span><span class="o">:</span></div><div class='line' id='LC1219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">preprocessState</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC1220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">preprocess</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC1221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">1</span><span class="o">:</span></div><div class='line' id='LC1223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="mi">2</span><span class="o">:</span></div><div class='line' id='LC1225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">testChunks</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">tested</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">test</span><span class="p">();</span></div><div class='line' id='LC1230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1232'><br/></div><div class='line' id='LC1233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">loaded</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">total</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">pendingRetry</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1236'><br/></div><div class='line' id='LC1237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">func</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">.</span><span class="nx">file</span><span class="p">.</span><span class="nx">slice</span> <span class="o">?</span> <span class="s1">&#39;slice&#39;</span> <span class="o">:</span></div><div class='line' id='LC1238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">.</span><span class="nx">file</span><span class="p">.</span><span class="nx">mozSlice</span> <span class="o">?</span> <span class="s1">&#39;mozSlice&#39;</span> <span class="o">:</span></div><div class='line' id='LC1239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">.</span><span class="nx">file</span><span class="p">.</span><span class="nx">webkitSlice</span> <span class="o">?</span> <span class="s1">&#39;webkitSlice&#39;</span> <span class="o">:</span></div><div class='line' id='LC1240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;slice&#39;</span><span class="p">)));</span></div><div class='line' id='LC1241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">bytes</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">.</span><span class="nx">file</span><span class="p">[</span><span class="nx">func</span><span class="p">](</span><span class="k">this</span><span class="p">.</span><span class="nx">startByte</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">endByte</span><span class="p">);</span></div><div class='line' id='LC1242'><br/></div><div class='line' id='LC1243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set up request and listen for event</span></div><div class='line' id='LC1244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">();</span></div><div class='line' id='LC1245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">upload</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;progress&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">progressHandler</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC1246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;load&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">doneHandler</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC1247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;error&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">doneHandler</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC1248'><br/></div><div class='line' id='LC1249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">prepareXhrRequest</span><span class="p">(</span><span class="s1">&#39;POST&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">method</span><span class="p">,</span> <span class="nx">bytes</span><span class="p">);</span></div><div class='line' id='LC1250'><br/></div><div class='line' id='LC1251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC1252'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1253'><br/></div><div class='line' id='LC1254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1255'><span class="cm">     * Abort current xhr request</span></div><div class='line' id='LC1256'><span class="cm">     * @function</span></div><div class='line' id='LC1257'><span class="cm">     */</span></div><div class='line' id='LC1258'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">abort</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Abort and reset</span></div><div class='line' id='LC1260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">;</span></div><div class='line' id='LC1261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">abort</span><span class="p">();</span></div><div class='line' id='LC1264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1265'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1266'><br/></div><div class='line' id='LC1267'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1268'><span class="cm">     * Retrieve current chunk upload status</span></div><div class='line' id='LC1269'><span class="cm">     * @function</span></div><div class='line' id='LC1270'><span class="cm">     * @returns {string} &#39;pending&#39;, &#39;uploading&#39;, &#39;success&#39;, &#39;error&#39;</span></div><div class='line' id='LC1271'><span class="cm">     */</span></div><div class='line' id='LC1272'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">status</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">pendingRetry</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if pending retry then that&#39;s effectively the same as actively uploading,</span></div><div class='line' id='LC1275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// there might just be a slight delay before the retry starts</span></div><div class='line' id='LC1276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;uploading&#39;</span><span class="p">;</span></div><div class='line' id='LC1277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;pending&#39;</span><span class="p">;</span></div><div class='line' id='LC1279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">&lt;</span> <span class="mi">4</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Status is really &#39;OPENED&#39;, &#39;HEADERS_RECEIVED&#39;</span></div><div class='line' id='LC1281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// or &#39;LOADING&#39; - meaning that stuff is happening</span></div><div class='line' id='LC1282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;uploading&#39;</span><span class="p">;</span></div><div class='line' id='LC1283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">200</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// HTTP 200, perfect</span></div><div class='line' id='LC1286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;success&#39;</span><span class="p">;</span></div><div class='line' id='LC1287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">permanentErrors</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">status</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">||</span></div><div class='line' id='LC1288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">retries</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">maxChunkRetries</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// HTTP 415/500/501, permanent error</span></div><div class='line' id='LC1290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;error&#39;</span><span class="p">;</span></div><div class='line' id='LC1291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// this should never happen, but we&#39;ll reset and queue a retry</span></div><div class='line' id='LC1293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// a likely case for this would be 503 service unavailable</span></div><div class='line' id='LC1294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">abort</span><span class="p">();</span></div><div class='line' id='LC1295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;pending&#39;</span><span class="p">;</span></div><div class='line' id='LC1296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1297'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1298'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1299'><br/></div><div class='line' id='LC1300'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1301'><span class="cm">     * Get response from xhr request</span></div><div class='line' id='LC1302'><span class="cm">     * @function</span></div><div class='line' id='LC1303'><span class="cm">     * @returns {String}</span></div><div class='line' id='LC1304'><span class="cm">     */</span></div><div class='line' id='LC1305'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">message</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">xhr</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">responseText</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1307'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1308'><br/></div><div class='line' id='LC1309'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1310'><span class="cm">     * Get upload progress</span></div><div class='line' id='LC1311'><span class="cm">     * @function</span></div><div class='line' id='LC1312'><span class="cm">     * @returns {number}</span></div><div class='line' id='LC1313'><span class="cm">     */</span></div><div class='line' id='LC1314'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">progress</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">pendingRetry</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">status</span><span class="p">();</span></div><div class='line' id='LC1319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">s</span> <span class="o">===</span> <span class="s1">&#39;success&#39;</span> <span class="o">||</span> <span class="nx">s</span> <span class="o">===</span> <span class="s1">&#39;error&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC1321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">s</span> <span class="o">===</span> <span class="s1">&#39;pending&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">total</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">loaded</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">total</span> <span class="o">:</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1326'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1327'><br/></div><div class='line' id='LC1328'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1329'><span class="cm">     * Count total size uploaded</span></div><div class='line' id='LC1330'><span class="cm">     * @function</span></div><div class='line' id='LC1331'><span class="cm">     * @returns {number}</span></div><div class='line' id='LC1332'><span class="cm">     */</span></div><div class='line' id='LC1333'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sizeUploaded</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">endByte</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">startByte</span><span class="p">;</span></div><div class='line' id='LC1335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// can&#39;t return only chunk.loaded value, because it is bigger than chunk size</span></div><div class='line' id='LC1336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">status</span><span class="p">()</span> <span class="o">!==</span> <span class="s1">&#39;success&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">size</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">progress</span><span class="p">()</span> <span class="o">*</span> <span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC1338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC1340'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1341'><br/></div><div class='line' id='LC1342'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1343'><span class="cm">     * Prepare Xhr request. Set query, headers and data</span></div><div class='line' id='LC1344'><span class="cm">     * @param {string} method GET or POST</span></div><div class='line' id='LC1345'><span class="cm">     * @param {string} [paramsMethod] octet or form</span></div><div class='line' id='LC1346'><span class="cm">     * @param {Blob} [blob] to send</span></div><div class='line' id='LC1347'><span class="cm">     * @returns {FormData|Blob|Null} data to send</span></div><div class='line' id='LC1348'><span class="cm">     */</span></div><div class='line' id='LC1349'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">prepareXhrRequest</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">paramsMethod</span><span class="p">,</span> <span class="nx">blob</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add data from the query options</span></div><div class='line' id='LC1351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">query</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">query</span><span class="p">;</span></div><div class='line' id='LC1352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">query</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">query</span> <span class="o">=</span> <span class="nx">query</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fileObj</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC1354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">query</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getParams</span><span class="p">(),</span> <span class="nx">query</span><span class="p">);</span></div><div class='line' id='LC1356'><br/></div><div class='line' id='LC1357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">target</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">target</span><span class="p">;</span></div><div class='line' id='LC1358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;GET&#39;</span> <span class="o">||</span> <span class="nx">paramsMethod</span> <span class="o">===</span> <span class="s1">&#39;octet&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add data from the query options</span></div><div class='line' id='LC1361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">v</span><span class="p">,</span> <span class="nx">k</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">k</span><span class="p">),</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">v</span><span class="p">)].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;=&#39;</span><span class="p">));</span></div><div class='line' id='LC1364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">target</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getTarget</span><span class="p">(</span><span class="nx">params</span><span class="p">);</span></div><div class='line' id='LC1366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">blob</span> <span class="o">||</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add data from the query options</span></div><div class='line' id='LC1369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">FormData</span><span class="p">();</span></div><div class='line' id='LC1370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">query</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">v</span><span class="p">,</span> <span class="nx">k</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">v</span><span class="p">);</span></div><div class='line' id='LC1372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">fileParameterName</span><span class="p">,</span> <span class="nx">blob</span><span class="p">);</span></div><div class='line' id='LC1374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1375'><br/></div><div class='line' id='LC1376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">target</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC1377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">withCredentials</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">withCredentials</span><span class="p">;</span></div><div class='line' id='LC1378'><br/></div><div class='line' id='LC1379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add data from header options</span></div><div class='line' id='LC1380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">flowObj</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">headers</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">v</span><span class="p">,</span> <span class="nx">k</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">v</span><span class="p">);</span></div><div class='line' id='LC1382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC1383'><br/></div><div class='line' id='LC1384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC1385'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1386'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1387'><br/></div><div class='line' id='LC1388'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1389'><span class="cm">   * Remove value from array</span></div><div class='line' id='LC1390'><span class="cm">   * @param array</span></div><div class='line' id='LC1391'><span class="cm">   * @param value</span></div><div class='line' id='LC1392'><span class="cm">   */</span></div><div class='line' id='LC1393'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">arrayRemove</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1394'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC1395'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">index</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1396'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">array</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC1397'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1398'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1399'><br/></div><div class='line' id='LC1400'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1401'><span class="cm">   * Execute function asynchronously</span></div><div class='line' id='LC1402'><span class="cm">   * @param fn</span></div><div class='line' id='LC1403'><span class="cm">   * @param context</span></div><div class='line' id='LC1404'><span class="cm">   */</span></div><div class='line' id='LC1405'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">async</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1406'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="nx">fn</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">context</span><span class="p">),</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC1407'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1408'><br/></div><div class='line' id='LC1409'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1410'><span class="cm">   * Extends the destination object `dst` by copying all of the properties from</span></div><div class='line' id='LC1411'><span class="cm">   * the `src` object(s) to `dst`. You can specify multiple `src` objects.</span></div><div class='line' id='LC1412'><span class="cm">   * @function</span></div><div class='line' id='LC1413'><span class="cm">   * @param {Object} dst Destination object.</span></div><div class='line' id='LC1414'><span class="cm">   * @param {...Object} src Source object(s).</span></div><div class='line' id='LC1415'><span class="cm">   * @returns {Object} Reference to `dst`.</span></div><div class='line' id='LC1416'><span class="cm">   */</span></div><div class='line' id='LC1417'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">extend</span><span class="p">(</span><span class="nx">dst</span><span class="p">,</span> <span class="nx">src</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1418'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">!==</span> <span class="nx">dst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1420'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC1421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dst</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1423'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1424'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1425'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">dst</span><span class="p">;</span></div><div class='line' id='LC1426'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1427'>&nbsp;&nbsp;<span class="nx">Flow</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">;</span></div><div class='line' id='LC1428'><br/></div><div class='line' id='LC1429'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1430'><span class="cm">   * Iterate each element of an object</span></div><div class='line' id='LC1431'><span class="cm">   * @function</span></div><div class='line' id='LC1432'><span class="cm">   * @param {Array|Object} obj object or an array to iterate</span></div><div class='line' id='LC1433'><span class="cm">   * @param {Function} callback first argument is a value and second is a key.</span></div><div class='line' id='LC1434'><span class="cm">   * @param {Object=} context Object to become context (`this`) for the iterator function.</span></div><div class='line' id='LC1435'><span class="cm">   */</span></div><div class='line' id='LC1436'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1437'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1438'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">;</span></div><div class='line' id='LC1439'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1440'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC1441'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Is Array?</span></div><div class='line' id='LC1442'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1443'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">key</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">key</span> <span class="o">&lt;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">key</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1444'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">key</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1445'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">;</span></div><div class='line' id='LC1446'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1447'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1448'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">key</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">;</span></div><div class='line' id='LC1452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1453'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1454'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1455'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1456'>&nbsp;&nbsp;<span class="nx">Flow</span><span class="p">.</span><span class="nx">each</span> <span class="o">=</span> <span class="nx">each</span><span class="p">;</span></div><div class='line' id='LC1457'><br/></div><div class='line' id='LC1458'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1459'><span class="cm">   * FlowFile constructor</span></div><div class='line' id='LC1460'><span class="cm">   * @type {FlowFile}</span></div><div class='line' id='LC1461'><span class="cm">   */</span></div><div class='line' id='LC1462'>&nbsp;&nbsp;<span class="nx">Flow</span><span class="p">.</span><span class="nx">FlowFile</span> <span class="o">=</span> <span class="nx">FlowFile</span><span class="p">;</span></div><div class='line' id='LC1463'><br/></div><div class='line' id='LC1464'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1465'><span class="cm">   * FlowFile constructor</span></div><div class='line' id='LC1466'><span class="cm">   * @type {FlowChunk}</span></div><div class='line' id='LC1467'><span class="cm">   */</span></div><div class='line' id='LC1468'>&nbsp;&nbsp;<span class="nx">Flow</span><span class="p">.</span><span class="nx">FlowChunk</span> <span class="o">=</span> <span class="nx">FlowChunk</span><span class="p">;</span></div><div class='line' id='LC1469'><br/></div><div class='line' id='LC1470'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1471'><span class="cm">   * Library version</span></div><div class='line' id='LC1472'><span class="cm">   * @type {string}</span></div><div class='line' id='LC1473'><span class="cm">   */</span></div><div class='line' id='LC1474'>&nbsp;&nbsp;<span class="nx">Flow</span><span class="p">.</span><span class="nx">version</span> <span class="o">=</span> <span class="s1">&#39;2.5.0&#39;</span><span class="p">;</span></div><div class='line' id='LC1475'><br/></div><div class='line' id='LC1476'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">module</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">module</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1477'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Expose Flow as module.exports in loaders that implement the Node</span></div><div class='line' id='LC1478'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// module pattern (including browserify). Do not create the global, since</span></div><div class='line' id='LC1479'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the user will be storing it themselves locally, and globals are frowned</span></div><div class='line' id='LC1480'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// upon in the Node module world.</span></div><div class='line' id='LC1481'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">Flow</span><span class="p">;</span></div><div class='line' id='LC1482'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1483'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Otherwise expose Flow to the global object as usual</span></div><div class='line' id='LC1484'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">Flow</span> <span class="o">=</span> <span class="nx">Flow</span><span class="p">;</span></div><div class='line' id='LC1485'><br/></div><div class='line' id='LC1486'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Register as a named AMD module, since Flow can be concatenated with other</span></div><div class='line' id='LC1487'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// files that may use define, but not via a proper concatenation script that</span></div><div class='line' id='LC1488'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// understands anonymous AMD modules. A named AMD is safest and most robust</span></div><div class='line' id='LC1489'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// way to register. Lowercase flow is used because AMD module names are</span></div><div class='line' id='LC1490'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// derived from file names, and Flow is normally delivered in a lowercase</span></div><div class='line' id='LC1491'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// file name. Do this after creating the global so that if an AMD module wants</span></div><div class='line' id='LC1492'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// to call noConflict to hide this version of Flow, it will work.</span></div><div class='line' id='LC1493'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">define</span><span class="p">(</span> <span class="s2">&quot;flow&quot;</span><span class="p">,</span> <span class="p">[],</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">Flow</span><span class="p">;</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC1495'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1496'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1497'><span class="p">})(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">document</span><span class="p">);</span></div><div class='line' id='LC1498'><br/></div><div class='line' id='LC1499'><span class="cm">/**</span></div><div class='line' id='LC1500'><span class="cm"> * @description</span></div><div class='line' id='LC1501'><span class="cm"> * var app = angular.module(&#39;App&#39;, [&#39;flow.provider&#39;], function(flowFactoryProvider){</span></div><div class='line' id='LC1502'><span class="cm"> *    flowFactoryProvider.defaults = {target: &#39;/&#39;};</span></div><div class='line' id='LC1503'><span class="cm"> * });</span></div><div class='line' id='LC1504'><span class="cm"> * @name flowFactoryProvider</span></div><div class='line' id='LC1505'><span class="cm"> */</span></div><div class='line' id='LC1506'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;flow.provider&#39;</span><span class="p">,</span> <span class="p">[])</span></div><div class='line' id='LC1507'><span class="p">.</span><span class="nx">provider</span><span class="p">(</span><span class="s1">&#39;flowFactory&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1508'>&nbsp;&nbsp;<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC1509'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1510'><span class="cm">   * Define the default properties for flow.js</span></div><div class='line' id='LC1511'><span class="cm">   * @name flowFactoryProvider.defaults</span></div><div class='line' id='LC1512'><span class="cm">   * @type {Object}</span></div><div class='line' id='LC1513'><span class="cm">   */</span></div><div class='line' id='LC1514'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC1515'><br/></div><div class='line' id='LC1516'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1517'><span class="cm">   * Flow, MaybeFlow or NotFlow</span></div><div class='line' id='LC1518'><span class="cm">   * @name flowFactoryProvider.factory</span></div><div class='line' id='LC1519'><span class="cm">   * @type {function}</span></div><div class='line' id='LC1520'><span class="cm">   * @return {Flow}</span></div><div class='line' id='LC1521'><span class="cm">   */</span></div><div class='line' id='LC1522'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">factory</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1523'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">Flow</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1524'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1525'><br/></div><div class='line' id='LC1526'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1527'><span class="cm">   * Define the default events</span></div><div class='line' id='LC1528'><span class="cm">   * @name flowFactoryProvider.events</span></div><div class='line' id='LC1529'><span class="cm">   * @type {Array}</span></div><div class='line' id='LC1530'><span class="cm">   * @private</span></div><div class='line' id='LC1531'><span class="cm">   */</span></div><div class='line' id='LC1532'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">events</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1533'><br/></div><div class='line' id='LC1534'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1535'><span class="cm">   * Add default events</span></div><div class='line' id='LC1536'><span class="cm">   * @name flowFactoryProvider.on</span></div><div class='line' id='LC1537'><span class="cm">   * @function</span></div><div class='line' id='LC1538'><span class="cm">   * @param {string} event</span></div><div class='line' id='LC1539'><span class="cm">   * @param {Function} callback</span></div><div class='line' id='LC1540'><span class="cm">   */</span></div><div class='line' id='LC1541'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">on</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1542'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nx">event</span><span class="p">,</span> <span class="nx">callback</span><span class="p">]);</span></div><div class='line' id='LC1543'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1544'><br/></div><div class='line' id='LC1545'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$get</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1546'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fn</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">factory</span><span class="p">;</span></div><div class='line' id='LC1547'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">defaults</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">defaults</span><span class="p">;</span></div><div class='line' id='LC1548'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">events</span><span class="p">;</span></div><div class='line' id='LC1549'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC1550'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;create&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1551'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// combine default options with global options and options</span></div><div class='line' id='LC1552'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">flow</span> <span class="o">=</span> <span class="nx">fn</span><span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">defaults</span><span class="p">,</span> <span class="nx">opts</span><span class="p">));</span></div><div class='line' id='LC1553'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">events</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1554'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flow</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">event</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">event</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC1555'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1556'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">flow</span><span class="p">;</span></div><div class='line' id='LC1557'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1558'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1559'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1560'><span class="p">});</span></div><div class='line' id='LC1561'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;flow.init&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;flow.provider&#39;</span><span class="p">])</span></div><div class='line' id='LC1562'>&nbsp;&nbsp;<span class="p">.</span><span class="nx">controller</span><span class="p">(</span><span class="s1">&#39;flowCtrl&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;$scope&#39;</span><span class="p">,</span> <span class="s1">&#39;$attrs&#39;</span><span class="p">,</span> <span class="s1">&#39;$parse&#39;</span><span class="p">,</span> <span class="s1">&#39;flowFactory&#39;</span><span class="p">,</span></div><div class='line' id='LC1563'>&nbsp;&nbsp;<span class="kd">function</span> <span class="p">(</span><span class="nx">$scope</span><span class="p">,</span> <span class="nx">$attrs</span><span class="p">,</span> <span class="nx">$parse</span><span class="p">,</span> <span class="nx">flowFactory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1564'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// create the flow object</span></div><div class='line' id='LC1565'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">$scope</span><span class="p">.</span><span class="nx">$eval</span><span class="p">(</span><span class="nx">$attrs</span><span class="p">.</span><span class="nx">flowInit</span><span class="p">));</span></div><div class='line' id='LC1566'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">flow</span> <span class="o">=</span> <span class="nx">flowFactory</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1567'><br/></div><div class='line' id='LC1568'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flow</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;catchAll&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">eventName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1569'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1570'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span></div><div class='line' id='LC1571'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">$scope</span><span class="p">.</span><span class="nx">$broadcast</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">$scope</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;flow::&#39;</span> <span class="o">+</span> <span class="nx">eventName</span><span class="p">,</span> <span class="nx">flow</span><span class="p">].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">args</span><span class="p">));</span></div><div class='line' id='LC1572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">({</span></div><div class='line' id='LC1573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;progress&#39;</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span> <span class="s1">&#39;filesSubmitted&#39;</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span> <span class="s1">&#39;fileSuccess&#39;</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span> <span class="s1">&#39;fileError&#39;</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span> <span class="s1">&#39;complete&#39;</span><span class="o">:</span> <span class="mi">1</span></div><div class='line' id='LC1574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}[</span><span class="nx">eventName</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC1575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$scope</span><span class="p">.</span><span class="nx">$apply</span><span class="p">();</span></div><div class='line' id='LC1576'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1577'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">defaultPrevented</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1578'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1579'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1580'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1581'><br/></div><div class='line' id='LC1582'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$scope</span><span class="p">.</span><span class="nx">$flow</span> <span class="o">=</span> <span class="nx">flow</span><span class="p">;</span></div><div class='line' id='LC1583'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$attrs</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="s1">&#39;flowName&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1584'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$parse</span><span class="p">(</span><span class="nx">$attrs</span><span class="p">.</span><span class="nx">flowName</span><span class="p">).</span><span class="nx">assign</span><span class="p">(</span><span class="nx">$scope</span><span class="p">,</span> <span class="nx">flow</span><span class="p">);</span></div><div class='line' id='LC1585'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$scope</span><span class="p">.</span><span class="nx">$on</span><span class="p">(</span><span class="s1">&#39;$destroy&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1586'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$parse</span><span class="p">(</span><span class="nx">$attrs</span><span class="p">.</span><span class="nx">flowName</span><span class="p">).</span><span class="nx">assign</span><span class="p">(</span><span class="nx">$scope</span><span class="p">);</span></div><div class='line' id='LC1587'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1588'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1589'>&nbsp;&nbsp;<span class="p">}])</span></div><div class='line' id='LC1590'>&nbsp;&nbsp;<span class="p">.</span><span class="nx">directive</span><span class="p">(</span><span class="s1">&#39;flowInit&#39;</span><span class="p">,</span> <span class="p">[</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1591'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC1592'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC1593'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">controller</span><span class="o">:</span> <span class="s1">&#39;flowCtrl&#39;</span></div><div class='line' id='LC1594'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1595'>&nbsp;&nbsp;<span class="p">}]);</span></div><div class='line' id='LC1596'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;flow.btn&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;flow.init&#39;</span><span class="p">])</span></div><div class='line' id='LC1597'><span class="p">.</span><span class="nx">directive</span><span class="p">(</span><span class="s1">&#39;flowBtn&#39;</span><span class="p">,</span> <span class="p">[</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1598'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC1599'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;restrict&#39;</span><span class="o">:</span> <span class="s1">&#39;EA&#39;</span><span class="p">,</span></div><div class='line' id='LC1600'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;scope&#39;</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC1601'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;require&#39;</span><span class="o">:</span> <span class="s1">&#39;^flowInit&#39;</span><span class="p">,</span></div><div class='line' id='LC1602'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;link&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">scope</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1603'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isDirectory</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="s1">&#39;flowDirectory&#39;</span><span class="p">);</span></div><div class='line' id='LC1604'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isSingleFile</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="s1">&#39;flowSingleFile&#39;</span><span class="p">);</span></div><div class='line' id='LC1605'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">inputAttrs</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="s1">&#39;flowAttrs&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">$eval</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">flowAttrs</span><span class="p">);</span></div><div class='line' id='LC1606'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$flow</span><span class="p">.</span><span class="nx">assignBrowse</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">isDirectory</span><span class="p">,</span> <span class="nx">isSingleFile</span><span class="p">,</span> <span class="nx">inputAttrs</span><span class="p">);</span></div><div class='line' id='LC1607'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1608'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1609'><span class="p">}]);</span></div><div class='line' id='LC1610'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;flow.dragEvents&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;flow.init&#39;</span><span class="p">])</span></div><div class='line' id='LC1611'><span class="cm">/**</span></div><div class='line' id='LC1612'><span class="cm"> * @name flowPreventDrop</span></div><div class='line' id='LC1613'><span class="cm"> * Prevent loading files then dropped on element</span></div><div class='line' id='LC1614'><span class="cm"> */</span></div><div class='line' id='LC1615'>&nbsp;&nbsp;<span class="p">.</span><span class="nx">directive</span><span class="p">(</span><span class="s1">&#39;flowPreventDrop&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1616'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC1617'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;scope&#39;</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC1618'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;link&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">scope</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1619'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;drop dragover&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1620'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC1621'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1622'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1623'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1624'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC1625'><span class="cm">/**</span></div><div class='line' id='LC1626'><span class="cm"> * @name flowDragEnter</span></div><div class='line' id='LC1627'><span class="cm"> * executes `flowDragEnter` and `flowDragLeave` events</span></div><div class='line' id='LC1628'><span class="cm"> */</span></div><div class='line' id='LC1629'>&nbsp;&nbsp;<span class="p">.</span><span class="nx">directive</span><span class="p">(</span><span class="s1">&#39;flowDragEnter&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;$timeout&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$timeout</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1630'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC1631'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;scope&#39;</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC1632'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;link&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">scope</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1633'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">promise</span><span class="p">;</span></div><div class='line' id='LC1634'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">enter</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1635'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;dragover&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1636'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isFileDrag</span><span class="p">(</span><span class="nx">event</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1637'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">;</span></div><div class='line' id='LC1638'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1639'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">enter</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1640'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$apply</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">flowDragEnter</span><span class="p">);</span></div><div class='line' id='LC1641'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enter</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1642'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1643'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$timeout</span><span class="p">.</span><span class="nx">cancel</span><span class="p">(</span><span class="nx">promise</span><span class="p">);</span></div><div class='line' id='LC1644'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC1645'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1646'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;dragleave drop&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1647'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span> <span class="o">=</span> <span class="nx">$timeout</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1648'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$eval</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">flowDragLeave</span><span class="p">);</span></div><div class='line' id='LC1649'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1650'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enter</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1651'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="mi">100</span><span class="p">);</span></div><div class='line' id='LC1652'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1653'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">isFileDrag</span><span class="p">(</span><span class="nx">dragEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1654'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fileDrag</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1655'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dataTransfer</span> <span class="o">=</span> <span class="nx">dragEvent</span><span class="p">.</span><span class="nx">dataTransfer</span> <span class="o">||</span> <span class="nx">dragEvent</span><span class="p">.</span><span class="nx">originalEvent</span><span class="p">.</span><span class="nx">dataTransfer</span><span class="p">;</span></div><div class='line' id='LC1656'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">dataTransfer</span> <span class="o">&amp;&amp;</span> <span class="nx">dataTransfer</span><span class="p">.</span><span class="nx">types</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1657'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">val</span> <span class="o">===</span> <span class="s1">&#39;Files&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1658'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileDrag</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1659'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1660'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1661'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fileDrag</span><span class="p">;</span></div><div class='line' id='LC1662'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1663'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1664'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1665'>&nbsp;&nbsp;<span class="p">}]);</span></div><div class='line' id='LC1666'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;flow.drop&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;flow.init&#39;</span><span class="p">])</span></div><div class='line' id='LC1667'><span class="p">.</span><span class="nx">directive</span><span class="p">(</span><span class="s1">&#39;flowDrop&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1668'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC1669'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;scope&#39;</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC1670'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;require&#39;</span><span class="o">:</span> <span class="s1">&#39;^flowInit&#39;</span><span class="p">,</span></div><div class='line' id='LC1671'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;link&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">scope</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1672'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">flowDropEnabled</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1673'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$watch</span><span class="p">(</span><span class="nx">attrs</span><span class="p">.</span><span class="nx">flowDropEnabled</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1674'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1675'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assignDrop</span><span class="p">();</span></div><div class='line' id='LC1676'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1677'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">unAssignDrop</span><span class="p">();</span></div><div class='line' id='LC1678'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1679'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1680'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1681'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assignDrop</span><span class="p">();</span></div><div class='line' id='LC1682'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1683'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">assignDrop</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1684'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$flow</span><span class="p">.</span><span class="nx">assignDrop</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC1685'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1686'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">unAssignDrop</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1687'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$flow</span><span class="p">.</span><span class="nx">unAssignDrop</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC1688'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1689'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1690'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1691'><span class="p">});</span></div><div class='line' id='LC1692'><br/></div><div class='line' id='LC1693'><span class="o">!</span><span class="kd">function</span> <span class="p">(</span><span class="nx">angular</span><span class="p">)</span> <span class="p">{</span><span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC1694'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">module</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;flow.events&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;flow.init&#39;</span><span class="p">]);</span></div><div class='line' id='LC1695'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1696'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileSuccess</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;$file&#39;</span><span class="p">,</span> <span class="s1">&#39;$message&#39;</span><span class="p">],</span></div><div class='line' id='LC1697'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileProgress</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;$file&#39;</span><span class="p">],</span></div><div class='line' id='LC1698'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileAdded</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;$file&#39;</span><span class="p">,</span> <span class="s1">&#39;$event&#39;</span><span class="p">],</span></div><div class='line' id='LC1699'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">filesAdded</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;$files&#39;</span><span class="p">,</span> <span class="s1">&#39;$event&#39;</span><span class="p">],</span></div><div class='line' id='LC1700'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">filesSubmitted</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;$files&#39;</span><span class="p">,</span> <span class="s1">&#39;$event&#39;</span><span class="p">],</span></div><div class='line' id='LC1701'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileRetry</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;$file&#39;</span><span class="p">],</span></div><div class='line' id='LC1702'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileError</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;$file&#39;</span><span class="p">,</span> <span class="s1">&#39;$message&#39;</span><span class="p">],</span></div><div class='line' id='LC1703'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">uploadStart</span><span class="o">:</span> <span class="p">[],</span></div><div class='line' id='LC1704'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">complete</span><span class="o">:</span> <span class="p">[],</span></div><div class='line' id='LC1705'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">progress</span><span class="o">:</span> <span class="p">[],</span></div><div class='line' id='LC1706'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;$message&#39;</span><span class="p">,</span> <span class="s1">&#39;$file&#39;</span><span class="p">]</span></div><div class='line' id='LC1707'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1708'><br/></div><div class='line' id='LC1709'>&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">events</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">eventArgs</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1710'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="s1">&#39;flow&#39;</span> <span class="o">+</span> <span class="nx">capitaliseFirstLetter</span><span class="p">(</span><span class="nx">eventName</span><span class="p">);</span></div><div class='line' id='LC1711'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">name</span> <span class="o">==</span> <span class="s1">&#39;flowUploadStart&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1712'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span> <span class="o">=</span> <span class="s1">&#39;flowUploadStarted&#39;</span><span class="p">;</span><span class="c1">// event alias</span></div><div class='line' id='LC1713'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1714'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">directive</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="p">[</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1715'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC1716'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">require</span><span class="o">:</span> <span class="s1">&#39;^flowInit&#39;</span><span class="p">,</span></div><div class='line' id='LC1717'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">controller</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;$scope&#39;</span><span class="p">,</span> <span class="s1">&#39;$attrs&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">$scope</span><span class="p">,</span> <span class="nx">$attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1718'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$scope</span><span class="p">.</span><span class="nx">$on</span><span class="p">(</span><span class="s1">&#39;flow::&#39;</span> <span class="o">+</span> <span class="nx">eventName</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1719'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">funcArgs</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1720'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">funcArgs</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span><span class="c1">// remove angular event</span></div><div class='line' id='LC1721'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// remove flow object and ignore event if it is from parent directive</span></div><div class='line' id='LC1722'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$scope</span><span class="p">.</span><span class="nx">$flow</span> <span class="o">!==</span> <span class="nx">funcArgs</span><span class="p">.</span><span class="nx">shift</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC1723'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">;</span></div><div class='line' id='LC1724'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1725'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC1726'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">eventArgs</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1727'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span><span class="p">[</span><span class="nx">value</span><span class="p">]</span> <span class="o">=</span> <span class="nx">funcArgs</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC1728'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1729'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$scope</span><span class="p">.</span><span class="nx">$eval</span><span class="p">(</span><span class="nx">$attrs</span><span class="p">[</span><span class="nx">name</span><span class="p">],</span> <span class="nx">args</span><span class="p">)</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1730'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC1731'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1732'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1733'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}]</span></div><div class='line' id='LC1734'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1735'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}]);</span></div><div class='line' id='LC1736'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1737'><br/></div><div class='line' id='LC1738'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">capitaliseFirstLetter</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1739'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">string</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">toUpperCase</span><span class="p">()</span> <span class="o">+</span> <span class="nx">string</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC1740'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1741'><span class="p">}(</span><span class="nx">angular</span><span class="p">);</span></div><div class='line' id='LC1742'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;flow.img&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;flow.init&#39;</span><span class="p">])</span></div><div class='line' id='LC1743'><span class="p">.</span><span class="nx">directive</span><span class="p">(</span><span class="s1">&#39;flowImg&#39;</span><span class="p">,</span> <span class="p">[</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1744'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC1745'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;scope&#39;</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC1746'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;require&#39;</span><span class="o">:</span> <span class="s1">&#39;^flowInit&#39;</span><span class="p">,</span></div><div class='line' id='LC1747'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;link&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">scope</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1748'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">file</span> <span class="o">=</span> <span class="nx">attrs</span><span class="p">.</span><span class="nx">flowImg</span><span class="p">;</span></div><div class='line' id='LC1749'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$watch</span><span class="p">(</span><span class="nx">file</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1750'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1751'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">;</span></div><div class='line' id='LC1752'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1753'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fileReader</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">FileReader</span><span class="p">();</span></div><div class='line' id='LC1754'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileReader</span><span class="p">.</span><span class="nx">readAsDataURL</span><span class="p">(</span><span class="nx">file</span><span class="p">.</span><span class="nx">file</span><span class="p">);</span></div><div class='line' id='LC1755'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fileReader</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1756'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">$apply</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1757'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attrs</span><span class="p">.</span><span class="nx">$set</span><span class="p">(</span><span class="s1">&#39;src&#39;</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">result</span><span class="p">);</span></div><div class='line' id='LC1758'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1759'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1760'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1761'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1762'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1763'><span class="p">}]);</span></div><div class='line' id='LC1764'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;flow.transfers&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;flow.init&#39;</span><span class="p">])</span></div><div class='line' id='LC1765'><span class="p">.</span><span class="nx">directive</span><span class="p">(</span><span class="s1">&#39;flowTransfers&#39;</span><span class="p">,</span> <span class="p">[</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1766'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC1767'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;scope&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC1768'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;require&#39;</span><span class="o">:</span> <span class="s1">&#39;^flowInit&#39;</span><span class="p">,</span></div><div class='line' id='LC1769'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;link&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">scope</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1770'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scope</span><span class="p">.</span><span class="nx">transfers</span> <span class="o">=</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">$flow</span><span class="p">.</span><span class="nx">files</span><span class="p">;</span></div><div class='line' id='LC1771'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1772'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1773'><span class="p">}]);</span></div><div class='line' id='LC1774'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;flow&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;flow.provider&#39;</span><span class="p">,</span> <span class="s1">&#39;flow.init&#39;</span><span class="p">,</span> <span class="s1">&#39;flow.events&#39;</span><span class="p">,</span> <span class="s1">&#39;flow.btn&#39;</span><span class="p">,</span></div><div class='line' id='LC1775'>&nbsp;&nbsp;<span class="s1">&#39;flow.drop&#39;</span><span class="p">,</span> <span class="s1">&#39;flow.transfers&#39;</span><span class="p">,</span> <span class="s1">&#39;flow.img&#39;</span><span class="p">,</span> <span class="s1">&#39;flow.dragEvents&#39;</span><span class="p">]);</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.07288s from github-fe124-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-183f89044fff115f9249e5ee9d6a89d720c527b7.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-89f79637947f64400e73b3edac016795009a2ed4.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

