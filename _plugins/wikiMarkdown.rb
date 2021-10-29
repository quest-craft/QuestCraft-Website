module Jekyll
    class WikiMarkdown < Converters::Markdown
        safe true
        priority :high

        alias :super_convert :convert

        def resolve_link(title)
            permalink = @config["collections"]["posts"]["permalink"]
            URL.new({
                :template => permalink,
                :placeholders => {:title => title}
            }).to_s
        end

        def convert(content)
            index = 0
            looping = true

            while looping do
                index = content.index("[[", index)

                if index == nil
                    looping = false

                    break
                end

                endIndex = content.index("]]", index)
                wikiText = content[index + 2, endIndex - index - 2]
                wikiLink = wikiText.split("|")
                destination = wikiLink[0]
                title = wikiLink[1] || destination

                content.gsub! "[[#{wikiText}]]", "[#{title}](#{resolve_link(destination)})"

                index = endIndex
            end

            rendered = super_convert(content)

            return rendered
        end
    end
end

# nodemon -e rb,yml --exec "jekyll serve"
