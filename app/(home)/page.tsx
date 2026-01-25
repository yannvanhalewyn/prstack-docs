import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="mb-6 text-6xl md:text-7xl font-bold">
            <span className="text-gray-900">Pr</span>
            <span className="text-cyan-400">Stack</span>
          </h1>
          <p className="mb-4 text-2xl md:text-3xl text-gray-800 font-semibold">
            Embrace the chaos of development
          </p>
          <p className="mb-12 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A VCS-agnostic CLI and TUI app for effortless PR stack management. 
            Branch anywhere, work naturally, and let PRStack adapt to your workflow.
          </p>
          
          <div className="flex gap-4 justify-center mb-16">
            <Link
              href="/docs"
              className="rounded-lg bg-cyan-400 px-8 py-4 text-gray-50 hover:bg-cyan-500 font-semibold text-lg transition shadow-lg hover:shadow-cyan-400/50"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/yannvanhalewyn/prstack"
              className="rounded-lg border-2 border-gray-400 px-8 py-4 hover:bg-gray-300 font-semibold text-lg transition text-gray-800 shadow-lg"
            >
              GitHub
            </Link>
          </div>

          {/* Placeholder for TUI Screenshot */}
          <div className="mb-20 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-400 bg-gray-900 max-w-4xl mx-auto">
            <div className="aspect-[16/10] flex items-center justify-center text-gray-500 bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">⌨️</div>
                <p className="text-xl font-mono">TUI Screenshot Placeholder</p>
                <p className="text-sm mt-2 opacity-75">Interactive terminal interface</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <div className="bg-gray-50/50 backdrop-blur rounded-xl p-8 border border-gray-300 shadow-lg">
            <div className="text-4xl mb-4">🌳</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Branch Anywhere</h3>
            <p className="text-gray-700">
              Create branches wherever you need them. PRStack dynamically discovers your stack from any position—no planning required.
            </p>
          </div>

          <div className="bg-gray-50/50 backdrop-blur rounded-xl p-8 border border-gray-300 shadow-lg">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Auto-Discovery</h3>
            <p className="text-gray-700">
              Run <code className="px-2 py-1 bg-gray-900 text-amber-400 rounded text-sm font-mono">prstack sync</code> from any branch to automatically trace your stack back to trunk.
            </p>
          </div>

          <div className="bg-gray-50/50 backdrop-blur rounded-xl p-8 border border-gray-300 shadow-lg">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">CLI + TUI</h3>
            <p className="text-gray-700">
              Use quick CLI commands for speed or launch the interactive TUI for visual stack exploration and management.
            </p>
          </div>
        </div>

        {/* Quick Example */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Simple <span className="text-purple-400">Workflow</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Create Stack */}
            <div className="bg-gray-50/50 backdrop-blur rounded-xl p-6 border border-gray-300 shadow-lg">
              <h4 className="font-semibold mb-3 text-gray-900 flex items-center gap-2">
                <span className="text-cyan-400">1.</span> Create your stack
              </h4>
              <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700">
{`# Branch naturally as you work
git checkout -b feature-a
# ... make changes ...

git checkout -b feature-b
# ... make changes ...`}
              </pre>
            </div>

            {/* Sync Stack */}
            <div className="bg-gray-50/50 backdrop-blur rounded-xl p-6 border border-gray-300 shadow-lg">
              <h4 className="font-semibold mb-3 text-gray-900 flex items-center gap-2">
                <span className="text-purple-400">2.</span> Sync and create PRs
              </h4>
              <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700">
{`# Discover & manage your stack
prstack sync

# Discovers: feature-b → feature-a → main
# Creates chained PRs automatically`}
              </pre>
            </div>
          </div>
        </div>

        {/* Why PRStack */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Why <span className="text-cyan-400">PRStack</span>?
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50/50 backdrop-blur rounded-xl p-6 border border-gray-300 shadow-lg">
              <h4 className="font-semibold mb-2 text-gray-900 text-lg">
                <span className="text-cyan-400 mr-2">✓</span>
                No predefined structures
              </h4>
              <p className="text-gray-700 ml-7">
                Traditional stacking tools require planning. PRStack embraces organic development—branch, pivot, and explore freely.
              </p>
            </div>

            <div className="bg-gray-50/50 backdrop-blur rounded-xl p-6 border border-gray-300 shadow-lg">
              <h4 className="font-semibold mb-2 text-gray-900 text-lg">
                <span className="text-purple-400 mr-2">✓</span>
                VCS-agnostic design
              </h4>
              <p className="text-gray-700 ml-7">
                First-class support for <strong>Jujutsu</strong> and <strong>Git</strong>, with extensible architecture for any VCS.
              </p>
            </div>

            <div className="bg-gray-50/50 backdrop-blur rounded-xl p-6 border border-gray-300 shadow-lg">
              <h4 className="font-semibold mb-2 text-gray-900 text-lg">
                <span className="text-amber-400 mr-2">✓</span>
                Perfect for AI-powered development
              </h4>
              <p className="text-gray-700 ml-7">
                Modern parallelized workflows with multiple branches in flight? PRStack handles it effortlessly.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to streamline your PR workflow?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Free and open source. Get started in minutes.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/docs/installation"
              className="rounded-lg bg-cyan-400 px-8 py-4 text-gray-50 hover:bg-cyan-500 font-semibold text-lg transition shadow-lg hover:shadow-cyan-400/50"
            >
              Install Now
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border-2 border-gray-400 px-8 py-4 hover:bg-gray-300 font-semibold text-lg transition text-gray-800 shadow-lg"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-400 py-8 bg-gray-50/50 backdrop-blur">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            Built with ❤️ for developers who embrace the chaos |{' '}
            <a 
              href="https://github.com/yannvanhalewyn/prstack" 
              className="text-cyan-400 hover:text-cyan-500 font-semibold"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
