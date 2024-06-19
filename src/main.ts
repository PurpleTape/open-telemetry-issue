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

console.log(
    OTLPMetricExporter, OTLPTraceExporter, HostMetrics,
    Resource, AggregationTemporality, PeriodicExportingMetricReader,
    NodeSDK, SEMRESATTRS_SERVICE_NAME, SEMRESATTRS_SERVICE_VERSION
)
