# Usage examples

## Collection query

The entry point for collections is:

```text
https://ogcapi.dgterritorio.gov.pt/collections
```

From there, select the required collection and consult the documentation for the corresponding operation.

## Paginated query

For large volumes, use the pagination mechanisms provided by the operation.

The maximum number of features per response and pagination parameters should be confirmed in the OpenAPI specification for the version in production.

## Spatial query

Where the operation supports spatial filters, limit the query to the area of interest.

This reduces the volume transferred and generally improves performance and reduces the load on the service.

## GIS integration

OGC APIs can be used by GIS software and applications that support the corresponding OGC specifications.

Actual compatibility depends on the software version and the API being used.
