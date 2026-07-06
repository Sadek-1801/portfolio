namespace :static do
  desc "Render the site to static files in ./site for GitHub Pages"
  task export: :environment do
    site = Rails.root.join("site")
    FileUtils.rm_rf(site)
    FileUtils.mkdir_p(site)

    html = PagesController.render(:home, assigns: { portfolio: PortfolioContent.data })
    File.write(site.join("index.html"), html)

    # Fingerprinted CSS from assets:precompile, plus resume.pdf, icon.svg, etc.
    FileUtils.cp_r(Dir[Rails.root.join("public", "*")], site)
    File.write(site.join(".nojekyll"), "")

    puts "Exported #{site}: #{Dir[site.join('**/*')].count} files"
  end
end
