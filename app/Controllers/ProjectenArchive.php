<?php
namespace Ress\Controllers;

use BoxyBird\Inertia\Inertia;
use Ress\Inc\CollectYoastMeta;

class ProjectenArchive {
    public static function index() {

        $projecten_query = new \WP_Query([
            'post_type' => 'projecten',
            'posts_per_page' => -1,
        ]);
        $projecten = [];
        if ( $projecten_query->have_posts() ) {
			while ( $projecten_query->have_posts() ) : $projecten_query->the_post();
                $projecten[] = [
                    'id' => get_the_ID(),
                    'title' => get_the_title(),
                    'content' => get_the_content(),
                    'link' => get_permalink(),
                    'thumbnail' => get_the_post_thumbnail_url(get_the_ID(), 'full'),
                    'date' => get_the_date('c'),
                    'categories' => get_the_category(),
                    'tags' => get_the_tags(),
                ];
			endwhile;
		} else {
			$projecten = null;
		}

        return Inertia::render('ProjectenArchive', [
            'yoast_meta' => CollectYoastMeta::collectMeta(get_the_ID()),
            'title' => get_post_type(),
            'posts' => $projecten,
        ]);
    }
}