import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-proto';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
import { HostMetrics } from '@opentelemetry/host-metrics';
import { Resource } from '@opentelemetry/resources';
import { AggregationTemporality, PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { NodeSDK } from '@opentelemetry/sdk-node';
import {
    SEMRESATTRS_SERVICE_NAME,
    SEMRESATTRS_SERVICE_VERSION,
} from '@opentelemetry/semantic-conventions';

import express from 'express';

console.log(
    OTLPMetricExporter, OTLPTraceExporter, HostMetrics,
    Resource, AggregationTemporality, PeriodicExportingMetricReader,
    NodeSDK, SEMRESATTRS_SERVICE_NAME, SEMRESATTRS_SERVICE_VERSION
)

const app = express();

app.get('/', (_, res) => {
    res.send('Hello world!');
});

if (import.meta.env.PROD) {
    app.listen(3000);
}

export const VITE_PLUGIN_NODE = app;
