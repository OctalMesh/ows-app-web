version_settings(constraint='>=0.33.0')

docker_compose(
	  [
	      '../docker/compose.yaml',
	  	  '../docker/compose.standalone.yaml',
	  ],
	  project_name='octalweb-shop-dev',
)

dc_resource('ows-app-web', labels=['app'])
